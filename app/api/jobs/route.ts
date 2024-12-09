import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req:Request){
    const {data} = await req.json();
    try{
        const job = await prisma.job.create({data})
        return NextResponse.json(job,{status:201})
        
    }catch(error){
        return NextResponse.json({error:error})
    }
     

}

export async function GET(req:Request){

    try{
         const jobs = prisma.job.findMany();
         return NextResponse.json(jobs,{status:201})

    }catch(error){
        return NextResponse.json({error:error})
    }

}