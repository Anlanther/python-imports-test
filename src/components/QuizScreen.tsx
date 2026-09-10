import { useEffect, useState } from "react";
import { Field } from "../components/ui/field";
import { Input } from "../components/ui/input";
import { DEFAULT_QUESTION_COUNT } from "../constants";
import { IMPORT_CATEGORIES } from "../data";
import { useQuiz } from "../hooks";
import type { Answer, Category, QuestionAnswer } from "../models";
import { useQuizStore } from "../store/quizStore";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Progress, ProgressLabel, ProgressValue } from "./ui/progress";

const QuizScreen = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentIndex = useQuizStore((state) => state.currentIndex);
  const selectedCategories = useQuizStore((state) => state.selectedCategories);
  const { setScreen } = useQuiz();

  const [progress, setProgress] = useState(0);
  const [answerInput, setAnswerInput] = useState("");
  const [isAnswerDirty, setIsAnswerDirty] = useState(false);

  const setQuestions = useQuizStore((state) => state.setQuestions);
  const setAnswer = useQuizStore((state) => state.setUserAnswer);
  const setCurrentIndex = useQuizStore((state) => state.setCurrentIndex);

  useEffect(() => {
    generateQuestions();
  }, [setQuestions]);

  const generateQuestions = () => {
    const includedCategories: Category[] = selectedCategories.map(
      (category) => category,
    );
    const filteredQuestions: QuestionAnswer[] = Object.entries(
      IMPORT_CATEGORIES,
    )
      .filter(([category]) => includedCategories.includes(category as Category))
      .flatMap(([category, categoryData]) =>
        categoryData.imports.map((importItem) => ({
          name: importItem.name,
          statement: importItem.statement,
          category: category as Category,
        })),
      );
    const shuffledQuestions = [...filteredQuestions];

    for (let index = shuffledQuestions.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [shuffledQuestions[index], shuffledQuestions[randomIndex]] = [
        shuffledQuestions[randomIndex],
        shuffledQuestions[index],
      ];
    }

    const selectedQuestions = shuffledQuestions.slice(
      0,
      DEFAULT_QUESTION_COUNT,
    );
    setQuestions(selectedQuestions);
  };

  const handleAnswer = () => {
    const input = answerInput.trim();

    const answer: Answer = {
      question: questions[currentIndex],
      isCorrect: questions[currentIndex].statement === input,
      userAnswer: input,
    };
    setAnswer(answer);
    if (currentIndex + 1 >= DEFAULT_QUESTION_COUNT) {
      return setScreen("result");
    }
    setProgress(((currentIndex + 1) / DEFAULT_QUESTION_COUNT) * 100);
    setCurrentIndex(currentIndex + 1);
    setAnswerInput("");
    setIsAnswerDirty(false);
  };

  const handleBack = () => {
    const previousAnswer =
      useQuizStore.getState().userAnswers[currentIndex - 1];
    setCurrentIndex(currentIndex - 1);
    setProgress(((currentIndex - 1) / DEFAULT_QUESTION_COUNT) * 100);
    setAnswerInput(previousAnswer.userAnswer);
  };

  const isAnswerInvalid = isAnswerDirty && answerInput.trim().length === 0;

  return (
    <div className="container flex mx-auto flex-col items-center gap-4 pt-8">
      <Progress value={progress} className="w-[60%]">
        <ProgressLabel>Completed</ProgressLabel>
        <ProgressValue />
      </Progress>
      <Card className="w-[60%]">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (!isAnswerInvalid) {
              handleAnswer();
            }
          }}
        >
          <CardHeader>
            <CardTitle>Python Import Quiz</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="pb-3 pt-3">{questions[currentIndex]?.name ?? ""}</h3>
            <Field data-invalid={isAnswerInvalid} className="pb-3">
              <Input
                id="input-import"
                type="text"
                placeholder="import..."
                value={answerInput}
                onChange={(event) => {
                  setAnswerInput(event.target.value);
                  setIsAnswerDirty(true);
                }}
                required
                aria-invalid={isAnswerInvalid}
              />
            </Field>
          </CardContent>
          <CardFooter className="flex justify-between">
            {currentIndex > 0 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => handleBack()}
              >
                Back
              </Button>
            )}
            <Button
              type="submit"
              variant="outline"
              disabled={isAnswerInvalid}
              className="ml-auto"
            >
              Next
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default QuizScreen;
