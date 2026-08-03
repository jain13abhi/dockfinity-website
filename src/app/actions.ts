'use server'

import { Resend } from 'resend'
import { google } from 'googleapis'

const NOTIFY_EMAIL = process.env.CONTACT_NOTIFY_EMAIL || 'dockfinity@gmail.com'
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Dockfinity Website <onboarding@resend.dev>'
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

    // All three run in parallel and are awaited before returning — a
    // serverless function can be frozen the instant it responds, so any
    // fire-and-forget send here risks never completing. Only the first two
    // determine whether the submission counts as a success; the visitor's
    // own confirmation email is best-effort and never blocks or fails it.
    const [emailResult, sheetResult, ackResult] = await Promise.allSettled([
        sendNotificationEmail(submission),
        appendToGoogleSheet(submission),
        sendAcknowledgmentEmail(submission),
    ])

    if (emailResult.status === 'rejected') {
        console.error('Email notification failed', emailResult.reason)
    }
    if (sheetResult.status === 'rejected') {
        console.error('Google Sheets logging failed', sheetResult.reason)
    }
    if (ackResult.status === 'rejected') {
        console.error('Acknowledgment email failed', ackResult.reason)
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
        from: FROM_EMAIL,
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

async function sendAcknowledgmentEmail({ name, email, subject }: ContactSubmission) {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
        return
    }

    // The shared onboarding@resend.dev sandbox address can only send to the
    // Resend account's own signup email, not to an arbitrary visitor — this
    // requires a verified custom domain (i.e. RESEND_FROM_EMAIL configured
    // to a dockfinity.com address) to actually reach the visitor's inbox.
    if (FROM_EMAIL.includes('onboarding@resend.dev')) {
        return
    }

    const resend = new Resend(apiKey)

    await resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        replyTo: NOTIFY_EMAIL,
        subject: `We've received your message — Dockfinity`,
        text: [
            `Hi ${name},`,
            '',
            `Thank you for reaching out to Dockfinity regarding "${subject}". We've received your message and our team will get back to you within 1–2 business days.`,
            '',
            'For urgent queries, you can also reach us directly:',
            'Phone: +91 99117 21100',
            'Email: dockfinity@gmail.com',
            '',
            'Best regards,',
            'Team Dockfinity',
        ].join('\n'),
    })
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
