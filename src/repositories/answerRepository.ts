import { prisma } from "../config/database";
import { TypeAnswerInsert } from "../types/answerTypes";

export async function insertAnswer(answer:TypeAnswerInsert, questionId:number){
    return await prisma.answer.create({data:{...answer, questionId}});   
}

