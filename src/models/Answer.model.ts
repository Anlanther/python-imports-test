import type { Question } from "./Question.model";

export interface Answer {
  question: Question;
  userAnswer: string;
  isCorrect: boolean;
}
