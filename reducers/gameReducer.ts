import { GameState, KnownAction } from "./types";

export function gameReducer(state: GameState, action: KnownAction) {
  switch (action.type) {
    case "SET_QUIZ_ITEMS": {
      return { ...state, quizItems: action.payload };
    }
    case "INCREMENT_CURRENT_QUESTION": {
      return { ...state, currentQuestion: state.currentQuestion + 1 };
    }
    case "SET_SELECTED_ANSWER": {
      return { ...state, selectedAnswer: action.payload };
    }
    case "SET_TIME_IS_UP_FALSE": {
      return { ...state, timeIsUp: false };
    }
    case "SET_TIME_IS_UP_TRUE": {
      return { ...state, timeIsUp: true };
    }
    case "ADD_POINT": {
      return { ...state, points: state.points + 1 };
    }
    case "ADD_ANSWER_TIME": {
      return { ...state, answerTimes: [...state.answerTimes, action.payload] };
    }
  }
}
