'use server'

import { Resend } from 'resend'
import { google } from 'googleapis'

const NOTIFY_EMAIL = 'dockfinity@gmail.com'
const SHEET_TAB = process.env.GOOGLE_SHEET_TAB_NAME || 'Sheet1'
const PHONE_DIGITS_PATTERN = /^\d{10}$/

type ContactSubmission = {
    name: string
    email: string
    phone: string
    subject: string
    message: string
}

export async function submitContactForm(formData: FormData) {
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const phone = String(formData.get('phone') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()
    const subject = String(formData.get('subject') ?? '').trim()

    if (!name || !email || !phone || !message || !subject) {
        throw new Error('Please fill in all required fields.')
    }

    let phoneDigits = phone.replace(/\D/g, '')
    if (phoneDigits.length === 12 && phoneDigits.startsWith('91')) {
        phoneDigits = phoneDigits.slice(2)
    }
    if (!PHONE_DIGITS_PATTERN.test(phoneDigits)) {
        throw new Error('Please enter a valid phone number.')
    }

    if (message.length < 10) {
        throw new Error('Please enter a message with at least 10 characters.')
    }

    await verifyTurnstile(String(formData.get('cf-turnstile-response') ?? ''))

    const submission: ContactSubmission = { name, email, phone, subject, message }

    const [emailResult, sheetResult] = await Promise.allSettled([
        sendNotificationEmail(submission),
        appendToGoogleSheet(submission),
    ])

    if (emailResult.status === 'rejected') {
        console.error('Email notification failed', emailResult.reason)
    }
    if (sheetResult.status === 'rejected') {
        console.error('Google Sheets logging failed', sheetResult.reason)
    }

    // Treat the submission as successful if it landed anywhere — losing a
    // lead because one of two channels had a transient failure is worse
    // than an occasional missed email/sheet row.
    if (emailResult.status === 'rejected' && sheetResult.status === 'rejected') {
        throw new Error('Something went wrong sending your message. Please email us directly at dockfinity@gmail.com or call +91 99117 21100.')
    }

    return { success: true }
}

async function verifyTurnstile(token: string) {
    const secretKey = process.env.TURNSTILE_SECRET_KEY
    if (!secretKey) {
        // Not configured yet — skip rather than break the form for every visitor.
        return
    }

    if (!token) {
        throw new Error('Please complete the verification challenge and try again.')
    }

    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ secret: secretKey, response: token }),
    })

    const result = await response.json()
    if (!result.success) {
        throw new Error('Verification failed. Please try again.')
    }
}

async function sendNotificationEmail({ name, email, phone, subject, message }: ContactSubmission) {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
        throw new Error('RESEND_API_KEY is not configured')
    }

    const resend = new Resend(apiKey)

    const { error } = await resend.emails.send({
        from: 'Dockfinity Website <onboarding@resend.dev>',
        to: NOTIFY_EMAIL,
        replyTo: email,
        subject: `New enquiry: ${subject} — ${name}`,
        text: [
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone: ${phone}`,
            `Topic: ${subject}`,
            '',
            'Message:',
            message,
        ].join('\n'),
    })

    if (error) {
        throw new Error(error.message)
    }
}

async function appendToGoogleSheet({ name, email, phone, subject, message }: ContactSubmission) {
    const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n')
    const sheetId = process.env.GOOGLE_SHEET_ID

    if (!clientEmail || !privateKey || !sheetId) {
        throw new Error('Google Sheets is not configured')
    }

    const auth = new google.auth.JWT({
        email: clientEmail,
        key: privateKey,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: `${SHEET_TAB}!A:F`,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
            values: [[new Date().toISOString(), name, email, phone, subject, message]],
        },
    })
}
