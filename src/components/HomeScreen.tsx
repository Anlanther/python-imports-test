import { useState } from "react";

const HomeScreen = () => {
  const [showCheatSheet, setShowCheatSheet] = useState<boolean>(false);

  return (
    <div className="container">
      HomeScreen
      <button>Start Quiz</button>
    </div>
  );
};

export default HomeScreen;
