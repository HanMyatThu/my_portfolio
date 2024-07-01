import { EmailTemplate } from '@/components/common/EmailTemplate';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail: string = process.env.FROM_EMAIL!;

export async function POST (req: NextRequest, res: NextResponse) {
  try {
    const { email, subject, message } = await req.json();
    const data = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: subject,
      text: message,
      react:  EmailTemplate({ email: 'email' })
    });
    return NextResponse.json(data);
 } catch (error) {
    if (error) {
      return NextResponse.json(error);
    }
  }
};