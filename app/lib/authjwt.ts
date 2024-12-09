import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

const SECRET_KEY_JWT = process.env.SECRET_KEY_JWT as string
export async function JWTAuthantication(req:Request){
    const authHeader = req.headers.get('authorization');
    if(!authHeader){
        return NextResponse.json({error:'no token provided'},{status:400})
    }
    const token = authHeader.split(' ')[1];
    try{

        const decode = jwt.verify(token,SECRET_KEY_JWT)
        return NextResponse.json({ message: 'access granted', user: decode });


    }catch(error){
        return NextResponse.json({error:'invalide or expired token'},{status:400})

    }
}