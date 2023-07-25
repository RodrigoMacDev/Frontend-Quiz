import React, { useContext } from "react";
import { QuizContext } from "../context/quiz";
import "./Questions.css";
import Options from "./Options";

const Questions = () => {
  const [quizStage, dispatch] = useContext(QuizContext);
  const currentQuestion =
    quizStage.data[0].questions[quizStage.currentQuestion];

  //console.log(quizStage.data.questions)
  //const question = data[0].questions[0].question;

  //console.log(quizStage);

  const onSelectedOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
  };

  return (
    <div className="questions">
      <p>
        Pergunta {quizStage.currentQuestion + 1} de
        {quizStage.data[0].questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>

      <div id="options-container">
        {currentQuestion.options.map((option) => (
          <Options
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectedOption={() => onSelectedOption(option)}
          />
        ))}
      </div>

      {quizStage.answerSelected && (
        <button onClick={() => dispatch({ type: "NEXT_QUESTION" })}>
          Continuar
        </button>
      )}
    </div>
  );
};

export default Questions;
