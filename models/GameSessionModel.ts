import { AnswerInfo } from "./AnswerInfo";

export interface GameSessionModel {
  userId: string;
  category: string;
  fastestTime: number;
  slowestTime: number;
  avgTime: number;
  points: number;
  gameTime: number;

  answers: AnswerInfo[];
}
