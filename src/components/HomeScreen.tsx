import { useQuiz } from "../hooks";

const HomeScreen = () => {
  const { setScreen } = useQuiz();

  return (
    <div className="container">
      Python Import Quiz
      <button className="bg-primary" onClick={() => setScreen("quiz")}>
        Start Quiz
      </button>
    </div>
  );
};

export default HomeScreen;
