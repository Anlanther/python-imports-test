import { createContext } from "react";
import { useQuiz } from "../hooks";
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
};

export const QuizContext = createContext<QuizContextType>(
  QUIZ_CONTEXT_DEFAULT_VALUE,
);

type Props = {
  children: React.ReactNode;
};

const QuizProvider = ({ children }: Props) => {
  const quiz = useQuiz();
  return <QuizContext value={quiz}>{children}</QuizContext>;
};

export default QuizProvider;
