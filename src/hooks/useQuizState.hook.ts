import { useState } from "react";
import type { QuestionAnswer } from "../models";

export const useQuizState = () => {
  const [screen, setScreen] = useState<"home" | "quiz" | "result">("home");
  const [questions, setQuestions] = useState<QuestionAnswer[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionAnswer | null>(
    null,
  );
  const [userAnswer, setUserAnswer] = useState<string>("");

  return {
    screen,
    questions,
    currentIndex,
    currentQuestion,
    userAnswer,

    setScreen,
    setQuestions,
    setCurrentIndex,
    setCurrentQuestion,
    setUserAnswer,
  };
};
