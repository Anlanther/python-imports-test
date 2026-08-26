import { useContext } from "react";
import { QuizContext } from "../contexts";

export const useQuiz = () => {
  const context = useContext(QuizContext);
  return context;
};
