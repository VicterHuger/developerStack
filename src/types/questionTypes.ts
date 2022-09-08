import { Question } from "@prisma/client";

export type TypeQuestionInsert = Omit <Question, "id">;
