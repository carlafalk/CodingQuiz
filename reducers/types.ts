import { AnswerInfo } from "../models/AnswerInfo";
import { GameSessionModel } from "../models/GameSessionModel";
import QuizItem, { Answer } from "../models/QuizItem";

export interface GameState {
  quizItems: QuizItem[];
  currentQuestion: number;
  selectedAnswer: Answer | null;
  timeIsUp: boolean;
  gameSession: GameSessionModel;
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

interface AddAnswerInfoAction {
  type: "ADD_ANSWER_INFO";
  payload: AnswerInfo;
}

interface DeselectAnswerAction {
  type: "DESELECT_ANSWER";
}

export type KnownAction =
  | SetQuizItemsAction
  | IncrementCurrentQuestionAction
  | SetSelectedAnswerAction
  | SetTimeIsNotUpAction
  | SetTimeIsUpAction
  | AddAnswerInfoAction
  | DeselectAnswerAction;
