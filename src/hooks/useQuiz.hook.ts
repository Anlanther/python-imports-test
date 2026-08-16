import { useState } from "react";
import type { Question, Score } from "../models";

export const useQuiz = () => {
  const [screen, setScreen] = useState<"home" | "quiz" | "result">("home");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
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
