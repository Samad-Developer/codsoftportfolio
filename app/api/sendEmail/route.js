import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req) {
  const request = new NextRequest(req);
  if (request.method === 'POST') {
    const { name, email, message } = await request.json();
    console.log(name, email, message);
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'abdussamadkotha@gmail.com', 
        pass: 'nexy huxq wmng adzr', 
      },
    });
    try {
     
      const info = await transporter.sendMail({
        from: name, 
        to: 'abdussamadkotha@gmail.com', 
        subject: email,
        text: message,
      });
      console.log('Message sent:', { name, email, message, info });
      return NextResponse.json({ success: true });
    } catch (error) {
      console.error('Error sending message:', error);
      return NextResponse.json({ error: 'Failed to send message' });
    }
  }

  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}
