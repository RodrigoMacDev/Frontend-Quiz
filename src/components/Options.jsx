import { React, useContext } from "react";
import { QuizContext } from "../context/quiz";
import "./Options.css";

const Options = ({ option, selectedOption, answer }) => {
  const [quizStage, dispatch] = useContext(QuizContext);

  return (
    <div
      className={`option ${
        quizStage.answerSelected && option === answer ? "correct" : ""
      } ${quizStage.answerSelected && option !== answer ? "incorrect" : ""}`}
      onClick={() => selectedOption()}
    >
      {option}
    </div>
  );
};

export default Options;
