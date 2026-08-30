import { create } from "zustand";
import type { Category, Question, Score } from "../models";

type QuizState = {
  selectedCategories: Category[];
  questions: Question[];
  currentIndex: number;
  currentQuestion: Question | null;
  userAnswer: string;
  score: Score;
};

type QuizActions = {
  setSelectedCategories: (categories: Category[]) => void;
  setQuestions: (questions: Question[]) => void;
  setCurrentIndex: (index: number) => void;
  setCurrentQuestion: (question: Question | null) => void;
  setUserAnswer: (answer: string) => void;
  setScore: (score: Score) => void;
};

export const useQuizStore = create<QuizState & QuizActions>((set) => ({
  selectedCategories: [],
  questions: [],
  currentIndex: 0,
  currentQuestion: null,
  userAnswer: "",
  score: { correct: 0, incorrect: 0 },

  setSelectedCategories: (categories) =>
    set({ selectedCategories: categories }),
  setQuestions: (questions) => set({ questions }),
  setCurrentIndex: (index) => set({ currentIndex: index }),
  setCurrentQuestion: (question) => set({ currentQuestion: question }),
  setUserAnswer: (answer) => set({ userAnswer: answer }),
  setScore: (score) => set({ score }),
}));
