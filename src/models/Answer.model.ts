import type { QuestionAnswer } from "./QuestionAnswer.model";

export interface Answer {
  question: QuestionAnswer;
  userAnswer: string;
  isCorrect: boolean;
}
