import { createContext } from "react";
import { useQuizState } from "../hooks";

export interface QuizContextType {
  screen: "home" | "quiz" | "result";

  setScreen: (screen: "home" | "quiz" | "result") => void;
}

const QUIZ_CONTEXT_DEFAULT_VALUE: QuizContextType = {
  screen: "home",

  setScreen: () => {},
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
