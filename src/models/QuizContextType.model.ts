import type { Question } from "./Question.model";
import type { Score } from "./Score.model";

export interface QuizContextType {
  screen: "home" | "quiz" | "result";
  questions: Question[];
  currentIndex: number;
  currentQuestion: Question | null;
  userAnswer: string;
  score: Score;

  setScreen: (screen: "home" | "quiz" | "result") => void;
  setQuestions: (questions: Question[]) => void;
  setCurrentIndex: (index: number) => void;
  setCurrentQuestion: (question: Question | null) => void;
  setUserAnswer: (answer: string) => void;
  setScore: (score: Score) => void;
}
