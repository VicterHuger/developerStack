import * as answerRepository from '../repositories/answerRepository';

import { TypeAnswerInsert } from "../types/answerTypes";
export async function createAnswer(answer:TypeAnswerInsert, id:number){
    return await answerRepository.insertAnswer(answer, id);    
}

