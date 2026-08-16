import type { Question } from "./Question.model";
import type { Score } from "./Score.model";

export interface QuizContextType {
  screen: "home" | "quiz" | "result";
  questions: Question[];
  currentIndex: number;
  currentQuestion: Question | null;
  userAnswer: string;
  score: Score;
}
