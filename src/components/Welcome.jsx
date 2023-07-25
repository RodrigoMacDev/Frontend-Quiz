import React, { useContext } from "react";

import { QuizContext } from "../context/quiz";

import "./Welcome.css";
import question from "../svgs/question.svg";

const Welcome = () => {
  const [quizStage, dispatch] = useContext(QuizContext);

  return (
    <div className="welcome">
      <h2>Escolha uma categoria</h2>
      <p>Boa sorte!</p>
      <div className="buttons">
        <button onClick={() => dispatch({ type: "HTML_STATE" })}>HTML</button>
        <button onClick={() => dispatch({ type: "CSS_STATE" })}>CSS</button>
        <button onClick={() => dispatch({ type: "JS_STATE" })}>
          JavaScript
        </button>
        <button onClick={() => dispatch({ type: "REACT_STATE" })}>React</button>
      </div>
      <img src={question} alt="Question illustration" />
    </div>
  );
};

export default Welcome;
