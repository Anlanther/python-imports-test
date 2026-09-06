import { create } from "zustand";
import { Category, type Answer, type QuestionAnswer } from "../models";

type QuizState = {
  selectedCategories: Category[];
  questions: QuestionAnswer[];
  currentIndex: number;
  userAnswers: Answer[];
};

type QuizActions = {
  setSelectedCategories: (categories: Category[]) => void;
  setQuestions: (questions: QuestionAnswer[]) => void;
  setCurrentIndex: (index: number) => void;
  setUserAnswer: (answer: Answer) => void;
  resetQuiz: () => void;
};

export const useQuizStore = create<QuizState & QuizActions>((set) => ({
  selectedCategories: Object.values(Category),
  questions: [],
  currentIndex: 0,
  userAnswers: [],
  score: { correct: 0, incorrect: 0 },

  setSelectedCategories: (categories) =>
    set({ selectedCategories: categories }),
  setQuestions: (questions) => set({ questions }),
  setCurrentIndex: (index) => set({ currentIndex: index }),
  setUserAnswer: (answer) =>
    set((state) => {
      const updatedAnswers = [...state.userAnswers];
      updatedAnswers[state.currentIndex] = answer;
      return { userAnswers: updatedAnswers };
    }),
  resetQuiz: () =>
    set({
      selectedCategories: Object.values(Category),
      questions: [],
      currentIndex: 0,
      userAnswers: [],
    }),
}));
