import { GameSessionModel } from "../models/GameSessionModel";

export function buildGameSession(gameSession: GameSessionModel) {
  // let answerTimes:number[];

  // function getAnswertimes(){
  //    return gameSession.answers
  //   .filter((question) => question.answer?.isCorrect)
  // //   .find((question) => {
  // //     answerTimes.push(question.answerTime);
  // //   });
  // }

  const answerTimes = () => {
    let times: number[] = [];
    gameSession.answers
      .filter((question) => question.answer?.isCorrect)
      .forEach((question) => {
        times.push(question.answerTime);
      });
      return times;
  };

  gameSession.fastestTime = answerTimes().sort((n1, n2) => n1 - n2)[0];
  gameSession.slowestTime = answerTimes().sort((n1, n2) => n1 - n2)[answerTimes().length - 1];
  if(answerTimes().length > 0)
  {
      gameSession.avgTime = Number((answerTimes().reduce((acc, time) => acc + time) / gameSession.answers.filter(x => x.answer?.isCorrect).length).toFixed(2));

  }
  gameSession.points = gameSession.answers.filter(x => x.answer?.isCorrect).length;

  return gameSession;

}