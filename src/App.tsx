import React from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import QuizScreen from "./components/QuizScreen";
import ResultScreen from "./components/ResultScreen";
import QuizProvider from "./contexts/QuizContext";
import { useQuiz } from "./hooks";

const AppContent = () => {
  const { screen } = useQuiz();

  const screenMap: Record<"home" | "quiz" | "result", React.ReactElement> = {
    home: <HomeScreen />,
    quiz: <QuizScreen />,
    result: <ResultScreen />,
  };

  return <>{screenMap[screen] || screenMap.home}</>;
};

const App = () => {
  return (
    <QuizProvider>
      <AppContent />
    </QuizProvider>
  );
};

export default App;
