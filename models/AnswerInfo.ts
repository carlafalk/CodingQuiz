import { Answer } from "./QuizItem";

export interface AnswerInfo {
  question: string;
  answer: Answer | null;
  answerTime: number;
}
