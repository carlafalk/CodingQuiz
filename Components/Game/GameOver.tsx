import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import CSSImg from "../../assets/languageIcons/css-3.png";
import HTMLImg from "../../assets/languageIcons/html-5.png";
import JSImg from "../../assets/languageIcons/js.png";
import ReactImg from "../../assets/languageIcons/react.png";
import TSImg from "../../assets/languageIcons/typescript.png";
import { useSound } from "../../contexts/SoundContext";
import { useTheme } from "../../contexts/ThemeContext";
import { useUser } from "../../contexts/UserContext";
import { useVibrations } from "../../contexts/VibrationsContext";
import { colorsModel } from "../../models/ColorsModel";
import { GameSessionModel } from "../../models/GameSessionModel";
import { Divider } from "../../Styles/views";
import StandardButton from "../Buttons/StandardButton";
import TopSection from "../Layout/TopSection";
import QuizModal from "../Modal/QuizModal";
import STMText from "../Texts/ShareTechMonoText";
import GameSession from "./GameSession";

interface Props {
  gameSession: GameSessionModel;
  category: string;
  handlePressHome: () => void;
  handlePressPlayAgain: () => void;
  handlePressLeaderboard: () => void;
}

const GameOver = ({ gameSession, category, handlePressHome, handlePressPlayAgain, handlePressLeaderboard }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { themeColors } = useTheme();
  const { playHomeMusic } = useSound();
  const { gameCompleteVibration } = useVibrations();
  const { updateAchievements } = useUser();

  let categoryImg = HTMLImg;
  let categoryColor: string = "";

  if (category === "html") {
    categoryImg = HTMLImg;
    categoryColor = themeColors.categories.html;
  } else if (category === "css") {
    categoryImg = CSSImg;
    categoryColor = themeColors.categories.css;
  } else if (category === "react") {
    categoryImg = ReactImg;
    categoryColor = themeColors.categories.react;
  } else if (category === "javascript") {
    categoryImg = JSImg;
    categoryColor = themeColors.categories.javaScript;
  } else if (category === "typescript") {
    categoryImg = TSImg;
    categoryColor = themeColors.categories.typeScript;
  }

  const headerImg = <Image source={categoryImg} style={{ width: 40, height: 40 }} />;

  useEffect(() => {
    playHomeMusic();
    updateAchievements();
    gameCompleteVibration();
  }, []);

  return (
    <>
      <QuizModal
        show={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
        title={"Game Statistics"}
        headerColor={categoryColor}
        headerImg={headerImg}
      >
        <GameSession gameSession={gameSession} categoryColor={categoryColor} />
      </QuizModal>

      <TopSection title="game over" />
      <ScoreBox themeColors={themeColors}>
        <TextBox>
          <STMText size={20}>Score</STMText>
          <STMText size={20}>{gameSession.points}/10</STMText>
        </TextBox>
        <Divider style={{ width: "85%", verticalPadding: 0 }} color={themeColors.commons.white} />
        {gameSession.points !== 0 && (
          <>
            <TextBox>
              <STMText size={20}>Fastest answer</STMText>
              <STMText size={20}>{gameSession.fastestTime}s</STMText>
            </TextBox>
            <Divider style={{ width: "85%" }} color={themeColors.commons.white} />
            <TextBox>
              <STMText size={20}>Slowest answer</STMText>
              <STMText size={20}>{gameSession.slowestTime}s</STMText>
            </TextBox>
            <Divider style={{ width: "85%" }} color={themeColors.commons.white} />
            <TextBox>
              <STMText size={20}>Avarage time</STMText>
              <STMText size={20}>{gameSession.avgTime === -1 ? "-" : gameSession.avgTime}s</STMText>
            </TextBox>
          </>
        )}
        <StatsButton onPress={() => setModalIsOpen(true)} color={themeColors.lightPurple}>
          <STMText uppercase size={20}>
            show more stats
          </STMText>
        </StatsButton>
      </ScoreBox>

      <ButtonBox>
        <StandardButton color={themeColors.lightGreen} title="play again" onPress={handlePressPlayAgain} />
        <StandardButton color={themeColors.mustard} title="main menu" onPress={handlePressHome} />
        <StandardButton color={themeColors.mustard} title="leaderboard" onPress={handlePressLeaderboard} />
      </ButtonBox>
    </>
  );
};

export default GameOver;

const ScoreBox = styled.View<{ themeColors: colorsModel }>`
  background-color: ${({ themeColors }) => themeColors.deepPurple};
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  border-radius: 14px;
`;

const ButtonBox = styled.View`
  margin-top: 67px;
`;

const TextBox = styled.View`
  margin: 0 21px;
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
  padding: 15px 0;
`;
const StatsButton = styled.TouchableOpacity<{ color: string }>`
  background-color: ${({ color }) => color};
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
