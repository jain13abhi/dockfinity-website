'use server'

import { Resend } from 'resend'

const NOTIFY_EMAIL = 'dockfinity@gmail.com'

export async function submitContactForm(formData: FormData) {
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const phone = String(formData.get('phone') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()
    const subject = String(formData.get('subject') ?? '').trim()

    if (!name || !email || !phone || !message || !subject) {
        throw new Error('Please fill in all required fields.')
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
        console.error('RESEND_API_KEY is not configured — contact form cannot send email.')
        throw new Error('Our contact form is temporarily unavailable. Please email us directly at dockfinity@gmail.com or call +91 99117 21100.')
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
        console.error('Resend failed to send contact form email', error)
        throw new Error('Something went wrong sending your message. Please email us directly at dockfinity@gmail.com or call +91 99117 21100.')
    }

    return { success: true }
}
