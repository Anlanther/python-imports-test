import { useCallback } from "react";
import { IMPORT_CATEGORIES } from "../data";
import { useQuiz } from "../hooks";
import { Category } from "../models";
import { useQuizStore } from "../store/quizStore";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
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
    <div className="container flex mx-auto flex-col items-center gap-4 pt-8">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Python Import Quiz</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="pb-4">
            Select the categories below in which you want to practice with:
          </p>
          <div className="">
            <FieldGroup className="mx-auto grid w-full grid-cols-3 gap-3">
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
        <CardFooter className="flex justify-between">
          <AlertDialog>
            <AlertDialogTrigger
              render={<Button variant="outline">Cheat Sheet</Button>}
            />
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>All Imports</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogDescription>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {Object.entries(IMPORT_CATEGORIES).map(([_, category]) => {
                    return (
                      <Card key={category.name}>
                        <CardHeader>
                          <CardTitle>{category.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-4">
                            {category.imports.map((importItem) => (
                              <li key={importItem.name}>
                                <code>{importItem.statement}</code>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </AlertDialogDescription>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button variant="outline" onClick={() => setScreen("quiz")}>
            Start
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default HomeScreen;
