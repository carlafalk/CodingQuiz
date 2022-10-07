import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { BackHandler } from "react-native";
import { RootStackParams } from "../App";
import CountDown from "../Components/Game/CountDown";
import GameOver from "../Components/Game/GameOver";
import RunGame from "../Components/Game/RunGame";
import Background from "../Components/Layout/Background";
import { GameSessionModel } from "../models/GameSessionModel";

type Props = NativeStackScreenProps<RootStackParams, "Game">;

const GameScreen = ({ navigation, route }: Props) => {
  const [countingDown, setCountingDown] = useState(true);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [gameSession, setGameSession] = useState<GameSessionModel>({
    category: route.params.category,
    fastestTime: -1,
    slowestTime: -1,
    avgTime: -1,
    points: -1,
    answers: [],
    gameTime: -1,
    userId: "",
  });

  useEffect(() => {
    const backhandler = BackHandler.addEventListener("hardwareBackPress", () => true);
    return () => backhandler.remove();
  }, []);

  function handlePressHome() {
    navigation.navigate("Home");
  }

  function handlePressPlayAgain() {
    navigation.navigate("Categories");
  }

  function handlePressLeaderboard() {
    navigation.navigate("Leaderboard");
  }

  return (
    <Background dark>
      {countingDown ? (
        <CountDown setCountingDown={setCountingDown} />
      ) : !gameIsOver ? (
        <RunGame
          category={route.params.category}
          gameIsOver={gameIsOver}
          setGameIsOver={setGameIsOver}
          setGameSession={setGameSession}
          gameSession={gameSession}
        />
      ) : (
        gameSession.answers.length === 10 && (
          <GameOver
            gameSession={gameSession}
            category={route.params.category}
            handlePressHome={handlePressHome}
            handlePressPlayAgain={handlePressPlayAgain}
            handlePressLeaderboard={handlePressLeaderboard}
          />
        )
      )}
    </Background>
  );
};

export default GameScreen;
