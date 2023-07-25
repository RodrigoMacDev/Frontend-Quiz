import { useContext, useEffect } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import Questions from "./components/Questions";
import GameOver from "./components/GameOver";
import { QuizContext } from "./context/quiz";

function App() {
  const [quizStage, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);

  return (
    <div className="App">
      {quizStage.gameStage === "Start" && (
        <h1 className="title">Bem vindo ao Front-End Quiz</h1>
      )}
      {quizStage.gameStage === "Start" && <Welcome />}
      {quizStage.gameStage === "Playing" && <Questions />}
      {quizStage.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
