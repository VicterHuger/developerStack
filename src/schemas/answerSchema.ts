import Joi from 'joi';
import { TypeAnswerInsert  } from '../types/answerTypes';

export const answerSchema = Joi.object<TypeAnswerInsert>({
  answeredBy: Joi.string().required(),
  answer: Joi.string().required()
});
