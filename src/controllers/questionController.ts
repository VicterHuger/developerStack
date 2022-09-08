import { Request, Response } from 'express';
import * as questionService from '../services/questionService';
import * as answerService from '../services/answerService';

import { TypeQuestionInsert } from '../types/questionTypes';
import { TypeAnswerInsert } from '../types/answerTypes';

export async function createQuestion(req: Request, res: Response) {
  const body:TypeQuestionInsert = req.body;
  await questionService.createQuestion(body);
  return res.status(201).send(body);
}


export async function createAnswer(req: Request, res: Response) {
  const body: TypeAnswerInsert = req.body;
  const id:number = +req.params.id;
  await answerService.createAnswer(body, id);
  return res.status(201).send(body);
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.get();
  return res.status(200).send({questions})
}

export async function getById(req: Request, res: Response) {
  const id:number =+req.params.id;
  const result = await questionService.getById(id);
  return res.status(200).send(result);
}
