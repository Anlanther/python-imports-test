import { useEffect } from "react";
import { useQuiz } from "../hooks";
import { useQuizStore } from "../store/quizStore";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const ResultScreen = () => {
  const { setScreen } = useQuiz();
  const resetQuiz = useQuizStore((state) => state.resetQuiz);
  const answers = useQuizStore((state) => state.userAnswers);

  const handleRestart = () => {
    setScreen("home");
    resetQuiz();
  };

  useEffect(() => {
    console.log("Answers:", answers);
  }, [answers]);

  return (
    <div className="container flex flex-col mx-auto items-center gap-4 pt-8">
      <Card>
        <CardHeader>
          <CardTitle>Python Import Quiz</CardTitle>
        </CardHeader>
        <CardContent>
          <h3>
            <strong>TOTAL:</strong> {answers.filter((a) => a.isCorrect).length}/
            {answers.length}
          </h3>
          <div className="answer-cards grid grid-cols-1 gap-4 md:grid-cols-3">
            {answers.map((answer, index) => {
              return (
                <Card key={answer.question.name}>
                  <CardHeader>
                    <CardTitle>
                      {index + 1}. {answer.question.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="rounded-md border border-primary/20 bg-primary/5 p-3">
                      <span className="text-xs font-semibold tracking-wide text-primary uppercase">
                        Your Answer
                      </span>
                      <span className="mt-1 block wrap-break-words font-medium">
                        {answer.userAnswer}
                      </span>
                    </p>
                    <p className="mt-3 rounded-md border border-emerald-500/25 bg-emerald-500/5 p-3">
                      <span className="text-xs font-semibold tracking-wide text-emerald-700 uppercase dark:text-emerald-400">
                        Correct Answer
                      </span>
                      <span className="mt-1 block wrap-break-words font-medium">
                        {answer.question.statement}
                      </span>
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" onClick={handleRestart}>
            Restart
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default ResultScreen;
