import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { connectRedis } from '@/app/lib/redisClient';
import jwt from 'jsonwebtoken'

const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const prisma = new PrismaClient();



async function SendOTP(email: string, otp: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"webApp" <${SMTP_USER}>`,
    to: email,
    subject: 'Your OTP for Registration',
    text: `Your OTP for Registration is: ${otp}`,
  };

  return transporter.sendMail(mailOptions);
}

function Otpgeneration() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: Request) {
  try {
    const { email, prefix, name, password, role, education, year } = await req.json();
    

    if (!email || !password || !role || !prefix || !name || (role === 'student' && !year)) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    console.log('1')
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    console.log('1')

    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const otp = Otpgeneration();

    // Using redis set to store the OTP with a 600-second expiration
    console.log('1')

      // const redis = await connectRedis();
      // await redis.set(`otp:${email}`, JSON.stringify({ otp, userdata: { email, prefix, name, hashedPassword, role, education, year } }),{EX:600});
      const otptoken = jwt.sign(otp,"secret")
      

    
    console.log('1')

    // Store OTP with an expiration time of 600 seconds (10 minutes)
    console.log('1')
    
    
      await SendOTP(email, otp);
      const Details = {email,prefix,name,hashedPassword,role,education,year}
    
    console.log('12')
    return NextResponse.json({ message: 'OTP sent successfully' ,otptoken,Details}, { status: 200 });
  } catch (error) {
    console.error('Error in signup process:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
