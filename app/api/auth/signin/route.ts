import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()
    const SECRET_KEY_JWT = process.env.SECRET_KEY_JWT as string

export  async function POST (req:Request) {
    try{
        const {email,password} = await req.json()

        const userExist = await prisma.user.findUnique({
            where:{email},
        })
        if(!userExist){
            return NextResponse.json({error:'User Doesnt Exist'},{status:400})
        }
        const hashedPassword =await bcrypt.hash(password,10)
        const isPasswordValid = await bcrypt.compare(hashedPassword,userExist.password)

        if(!isPasswordValid){
            return NextResponse.json({error:'password is not valid'},{status:400})
        }
        const token =  jwt.sign({id:userExist.id,email:userExist.email,role:userExist.role},SECRET_KEY_JWT,{expiresIn:'16h'})

        return NextResponse.json({message:'login Sucessfull',token})


    }catch(error){
        return NextResponse.json({error:error})
    }

}