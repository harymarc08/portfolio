import nodemailer from 'nodemailer'

export async function POST(req) {
    const body = await req.json()
    const { firstname, lastname, email, service, message } = body

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.EMAIL_PASS,
        },
    })

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_FROM,
            subject: `Contact - ${firstname} ${lastname}`,
            text: `              PORTFOLIO!!!!
Service: ${service}
From: ${firstname} ${lastname} (${email})

Message:
${message}`,
        })

        return new Response(JSON.stringify({ success: true }), { status: 200 })
    } catch (error) {
        console.error('Error sending email:', error)
        return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 })
    }
}
