import QuizItem, { Answer } from "../models/QuizItem";

export interface GameState {
  quizItems: QuizItem[];
  currentQuestion: number;
  selectedAnswer: Answer | null;
  timeIsUp: boolean;
  points: number;
  answerTimes: number[];
}

interface SetQuizItemsAction {
  type: "SET_QUIZ_ITEMS";
  payload: QuizItem[];
}

interface IncrementCurrentQuestionAction {
  type: "INCREMENT_CURRENT_QUESTION";
}

interface SetSelectedAnswerAction {
  type: "SET_SELECTED_ANSWER";
  payload: Answer | null;
}

interface SetTimeIsNotUpAction {
  type: "SET_TIME_IS_UP_FALSE";
}

interface SetTimeIsUpAction {
  type: "SET_TIME_IS_UP_TRUE";
}

interface IncrementPointsAction {
  type: "ADD_POINT";
}

interface AddAnswerTimeAction {
  type: "ADD_ANSWER_TIME";
  payload: number;
}

export type KnownAction =
  | SetQuizItemsAction
  | IncrementCurrentQuestionAction
  | SetSelectedAnswerAction
  | SetTimeIsNotUpAction
  | SetTimeIsUpAction
  | IncrementPointsAction
  | AddAnswerTimeAction;
