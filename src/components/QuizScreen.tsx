import { useEffect } from "react";
import { IMPORT_CATEGORIES } from "../data";
import type { Category, CategoryImports, Question } from "../models";
import { useQuizStore } from "../store/quizStore";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const TOTAL_QUESTIONS = 20;

const QuizScreen = () => {
  const setQuestions = useQuizStore((state) => state.setQuestions);

  useEffect(() => {
    const excludedCategories: CategoryImports[] = [];
    const filteredQuestions: Question[] = Object.entries(IMPORT_CATEGORIES)
      .filter(
        ([category]) =>
          !excludedCategories.includes(category as unknown as CategoryImports),
      )
      .flatMap(([category, categoryData]) =>
        categoryData.imports.map((importItem) => ({
          name: importItem.name,
          statement: importItem.statement,
          category: category as Category,
        })),
      );
    const selectedQuestions: Question[] = [];

    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
      const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
      const selectedQuestion = filteredQuestions[randomIndex];
      selectedQuestions.push(selectedQuestion);
    }

    setQuestions(selectedQuestions);
  }, [setQuestions]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Python Import Quiz</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Start</Button>
      </CardFooter>
    </Card>
  );
};

export default QuizScreen;
