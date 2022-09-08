import { Answer } from "@prisma/client";

export type TypeAnswerInsert = Omit <Answer, "id"| "questionId">;
