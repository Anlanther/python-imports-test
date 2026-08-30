import { useCallback } from "react";
import { useQuiz } from "../hooks";
import { Category } from "../models";
import { useQuizStore } from "../store/quizStore";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "./ui/field";

const HomeScreen = () => {
  const { setScreen } = useQuiz();
  const selectedCategories = useQuizStore((state) => state.selectedCategories);
  const setSelectedCategories = useQuizStore(
    (state) => state.setSelectedCategories,
  );

  const handleCategoryToggle = useCallback(
    (category: Category, checked: boolean) => {
      const nextCategories = checked
        ? [...new Set([...selectedCategories, category])]
        : selectedCategories.filter((item) => item !== category);

      setSelectedCategories(nextCategories);
    },
    [selectedCategories, setSelectedCategories],
  );

  return (
    <div className="container">
      <Card>
        <CardHeader>
          <CardTitle>Python Import Quiz</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
          <div>
            <FieldGroup className="mx-auto w-56">
              {Object.values(Category).map((category) => (
                <Field key={category} orientation="horizontal">
                  <Checkbox
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={(checked) =>
                      handleCategoryToggle(category, checked === true)
                    }
                    aria-label={category}
                  />
                  <FieldLabel>{category}</FieldLabel>
                </Field>
              ))}
            </FieldGroup>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" onClick={() => setScreen("quiz")}>
            Start
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default HomeScreen;
