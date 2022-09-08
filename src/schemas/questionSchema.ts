import Joi from 'joi';
 import { TypeQuestionInsert } from '../types/questionTypes';

export const questionSchema = Joi.object<TypeQuestionInsert>({

  askedBy: Joi.string().required(),
  question: Joi.string().required()
});
