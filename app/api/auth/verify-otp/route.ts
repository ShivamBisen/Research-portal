import { connectRedis } from '@/app/lib/redisClient';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient();

export async function POST(req:Request){
    const {otp,email, prefix, name, hashedPassword, role, education, year,department} = await req.json();
    
    const otpToken = await req.headers.get('otpToken')

    if (!otpToken) {
      return new Response(JSON.stringify({ error: 'OTP token is missing' }), {
        status: 400,
      });
    }


      const otp_decoded =  jwt.verify(otpToken,'secret') 
      
      
      
      console.log(otp_decoded)
      console.log(otp)

      if (parseInt(otp_decoded as string ,10) !== parseInt(otp,10)) {
        return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
      }

      await prisma.user.create({
        data: {
          email,
          prefix,
          name,
          password:hashedPassword,
          role,
          education_level:education,
          year,
          department:department, // Provide a value for `department`
        },
      });
      
      

    return NextResponse.json({ message: "User registered successfully" });


}