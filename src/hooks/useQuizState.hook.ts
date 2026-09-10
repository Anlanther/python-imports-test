import { useState } from "react";

export const useQuizState = () => {
  const [screen, setScreen] = useState<"home" | "quiz" | "result">("home");

  return {
    screen,

    setScreen,
  };
};
