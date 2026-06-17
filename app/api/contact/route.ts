import { NextRequest, NextResponse } from 'next/server';

interface ContactBody {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const contactEmail = process.env.CONTACT_TO_EMAIL || 'sangeerthananthanan@gmail.com';

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const toText = ({ name, email, subject, message }: Required<ContactBody>) =>
  [
    'New contact form submission',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    '',
    message,
  ].join('\n');

const toHtml = ({ name, email, subject, message }: Required<ContactBody>) => `
  <h2>New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${escapeHtml(name)}</p>
  <p><strong>Email:</strong> ${escapeHtml(email)}</p>
  <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
  <p><strong>Message:</strong></p>
  <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
`;

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactBody;
    const name = body.name?.trim() || '';
    const email = body.email?.trim() || '';
    const subject = body.subject?.trim() || '';
    const message = body.message?.trim() || '';

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

    if (!resendApiKey) {
      console.log('Contact form submission:', { name, email, subject, message });
      return NextResponse.json(
        {
          error:
            'Email service is not configured. Please email me directly using the contact details.',
        },
        { status: 500 }
      );
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [contactEmail],
        reply_to: email,
        subject: `Portfolio contact: ${subject}`,
        text: toText({ name, email, subject, message }),
        html: toHtml({ name, email, subject, message }),
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error('Email service error:', errorText);
      return NextResponse.json(
        { error: 'Failed to send message. Please email me directly.' },
        { status: 502 }
      );
    }

    // Return success response
    return NextResponse.json(
      { message: 'Message received successfully. I will get back to you soon!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}

// Handle preflight requests
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
