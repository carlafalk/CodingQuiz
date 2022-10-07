import { GameSessionModel } from "../models/GameSessionModel";
import { User } from "../models/User";

export function buildGameSession(gameSession: GameSessionModel, currentUser: User) {
  const answerTimes = () => {
    let times: number[] = [];
    gameSession.answers
      .filter((question) => question.answer?.isCorrect)
      .forEach((question) => {
        times.push(question.answerTime);
      });
    return times;
  };

  if (currentUser) gameSession.userId = currentUser.id;

  if (answerTimes().length > 0) {
    gameSession.gameTime = answerTimes().reduce((acc, curr) => acc + curr);
    gameSession.fastestTime = answerTimes().sort((n1, n2) => n1 - n2)[0];
    gameSession.slowestTime = answerTimes().sort((n1, n2) => n1 - n2)[answerTimes().length - 1];
    gameSession.avgTime = Number(
      (answerTimes().reduce((acc, time) => acc + time) / gameSession.answers.filter((x) => x.answer?.isCorrect).length).toFixed(2)
    );
  }
  gameSession.points = gameSession.answers.filter((x) => x.answer?.isCorrect).length;

  return gameSession;
}
