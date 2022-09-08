import * as questionRepository from '../repositories/questionRepository';
import { TypeQuestionInsert } from "../types/questionTypes";

export async function createQuestion(question:TypeQuestionInsert){
    return questionRepository.insertQuestion(question)
}

export async function get(){
    return await questionRepository.listQuestion();
}

export async function getById(id:number){
    return await questionRepository.listQuestionById(id);
}