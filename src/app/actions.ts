'use server'

export async function submitContactForm(formData: FormData) {
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const message = formData.get('message')
    const subject = formData.get('subject')

    // Simulate logging
    console.log('--- Contact Form Submission ---')
    console.log({ name, email, phone, subject, message })
    console.log('-------------------------------')

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    return { success: true, message: 'Message sent successfully!' }
}
