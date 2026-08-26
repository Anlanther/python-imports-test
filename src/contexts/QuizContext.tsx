import { createContext } from "react";
import { useQuizState } from "../hooks";
import type { QuizContextType } from "../models";

const QUIZ_CONTEXT_DEFAULT_VALUE: QuizContextType = {
  screen: "home",
  questions: [],
  currentIndex: 0,
  currentQuestion: null,
  userAnswer: "",
  score: {
    correct: 0,
    incorrect: 0,
  },

  setScreen: () => {},
  setQuestions: () => {},
  setCurrentIndex: () => {},
  setCurrentQuestion: () => {},
  setUserAnswer: () => {},
  setScore: () => {},
};

export const QuizContext = createContext<QuizContextType>(
  QUIZ_CONTEXT_DEFAULT_VALUE,
);

type Props = {
  children: React.ReactNode;
};

const QuizProvider = ({ children }: Props) => {
  const quiz = useQuizState();
  return <QuizContext value={quiz}>{children}</QuizContext>;
};

export default QuizProvider;
