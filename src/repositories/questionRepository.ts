import { prisma } from "../config/database";
import { TypeQuestionInsert } from "../types/questionTypes";

export async function insertQuestion(questionInsert: TypeQuestionInsert){
    await prisma.question.create({data:questionInsert})
}

export async function listQuestion(){
    return await prisma.question.findMany();
}

export async function listQuestionById(id:number){
    return await prisma.question.findUnique({where:{
        id
    },
    include:{
        answers:{
            select:{
                answeredBy:true,
                answer:true
            }
        }
    }
})
}