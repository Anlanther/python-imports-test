import { useState } from "react";
import type { QuestionAnswer, Score } from "../models";

export const useQuizState = () => {
  const [screen, setScreen] = useState<"home" | "quiz" | "result">("home");
  const [questions, setQuestions] = useState<QuestionAnswer[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionAnswer | null>(
    null,
  );
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [score, setScore] = useState<Score>({
    correct: 0,
    incorrect: 0,
  });

  return {
    screen,
    questions,
    currentIndex,
    currentQuestion,
    userAnswer,
    score,

    setScreen,
    setQuestions,
    setCurrentIndex,
    setCurrentQuestion,
    setUserAnswer,
    setScore,
  };
};
