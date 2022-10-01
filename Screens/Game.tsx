import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { RootStackParams } from "../App";
import Background from "../Components/Background";
import CountDown from "../Components/Game/CountDown";
import GameOverTest from "../Components/Game/GameOverTest";
import GameTest from "../Components/Game/GameTest";
import { AnswerInfo } from "../models/AnswerInfo";

type Props = NativeStackScreenProps<RootStackParams, "Game">;

const GameScreen = ({ navigation, route }: Props) => {
  const [countingDown, setCountingDown] = useState(true);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [gameSession, setGameSession] = useState<AnswerInfo[]>([]);

  useEffect(() => {}, [gameSession]);

  function handlePressHome() {
    navigation.navigate("Home");
  }

  function handlePressPlayAgain() {
    navigation.navigate("Categories");
  }

  return (
    <Background dark>
      {countingDown ? (
        <CountDown setCountingDown={setCountingDown} />
      ) : !gameIsOver ? (
        <GameTest category={route.params.category} gameIsOver={gameIsOver} setGameIsOver={setGameIsOver} setGameSession={setGameSession} />
      ) : (
        <GameOverTest
          gameSession={gameSession}
          category={route.params.category}
          handlePressHome={handlePressHome}
          handlePressPlayAgain={handlePressPlayAgain}
        />
      )}
    </Background>
  );
};

export default GameScreen;
