import { React, useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./GameOver.css";
import welldone from "../svgs/welldone.svg";

const GameOver = () => {
  const [quizStage, dispatch] = useContext(QuizContext);

  return (
    <div className="gameover">
      <h2>GameOver</h2>
      <p >Pontuação: {quizStage.score}</p>
      <p className="score">
        Você acertou {quizStage.score} de {quizStage.data[0].questions.length}
      </p>
      <img src={welldone} alt="GameOver" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  );
};

export default GameOver;
