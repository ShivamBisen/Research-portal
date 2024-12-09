import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(req:Request , {params}:{params:{id:string}}){
    try{
        const job = await prisma.job.findUnique({where:{id:parseInt(params.id)}})
        if(!job){
            return NextResponse.json({message:'job not found'},{status:404})
        }

        return NextResponse.json(job,{status:201})
        

    }catch(error){
        return NextResponse.json({error:error})
    }

}

export async function PUT(req:Request , {params}:{params:{id:string}})  {
    const data = await req.json();
    try{
        const updatedJob = await prisma.job.update({
            where:{id:parseInt(params.id)},
            data
        })

        return NextResponse.json(updatedJob,{status:201})

    }catch(error){
        return NextResponse.json({error:error})
    }

}


export async function DELETE(req:Request,{params}:{params:{id:string}}){
    try{
        await prisma.job.delete({
            where:{id:parseInt(params.id)}
        })
        return NextResponse.json({ message: "Job deleted successfully" }, { status: 200 });


    }catch(error){
        return NextResponse.json({error:error})
    }
}