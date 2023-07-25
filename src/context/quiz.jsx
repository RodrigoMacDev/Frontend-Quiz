import React, { createContext, useContext, useReducer } from "react";
import data from "../data/questions";

const STAGES = ["Start", "Playing", "End"];

const initialState = {
  gameStage: STAGES[0],
  data,
  currentQuestion: 0,
  category: 0,
  score: 0,
  answerSelected: false,
};

const reducerFunc = function (reducerState) {
  return {
    ...state,
    gameStage: STAGES[1],
    data: data.filter((item) => item.category === "HTML"),
  };
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "HTML_STATE":
      return {
        ...state,
        gameStage: STAGES[1],
        data: data.filter((item) => item.category === "HTML"),
        category: 0,
      };
    case "CSS_STATE":
      return {
        ...state,
        gameStage: STAGES[1],
        data: data.filter((item) => item.category === "CSS"),
        category: 1,
      };
    case "JS_STATE":
      return {
        ...state,
        gameStage: STAGES[1],
        data: data.filter((item) => item.category === "JavaScript"),
        category: 2,
      };
    case "REACT_STATE":
      return {
        ...state,
        gameStage: STAGES[1],
        data: data.filter((item) => item.category === "React"),
        category: 3,
      };

    case "REORDER_QUESTIONS":
      const reorderQuestinosFunc = (x, y, z, c) => {
        data[x].questions.sort(() => {
          return Math.random() - 0.5;
        });
        data[y].questions.sort(() => {
          return Math.random() - 0.5;
        });
        data[z].questions.sort(() => {
          return Math.random() - 0.5;
        });
        data[c].questions.sort(() => {
          return Math.random() - 0.5;
        });
      };
      const reorderQuestions = reorderQuestinosFunc(0, 1, 2, 3);

      return {
        ...state,
        data: reorderQuestions,
      };

    case "NEXT_QUESTION":
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;

      if (!data[state.category].questions[nextQuestion]) {
        endGame = true;
      }

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[2] : state.gameStage,
        answerSelected: false,
      };

    case "NEW_GAME":
      return initialState;

    case "CHECK_ANSWER":
      if (state.answerSelected) return state;

      const answer = action.payload.answer;
      const option = action.payload.option;
      let correctAnswer = 0;

      if (answer === option) correctAnswer = 1;

      return {
        ...state,
        score: state.score + correctAnswer,
        answerSelected: option,
      };

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
//