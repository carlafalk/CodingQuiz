import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import CSSImg from "../../assets/languageIcons/css-3.png";
import HTMLImg from "../../assets/languageIcons/html-5.png";
import JSImg from "../../assets/languageIcons/js.png";
import ReactImg from "../../assets/languageIcons/react.png";
import TSImg from "../../assets/languageIcons/typescript.png";
import { useSound } from "../../contexts/SoundContext";
import { useTheme } from "../../contexts/ThemeContext";
import { AnswerInfo } from "../../models/AnswerInfo";
import { colorsModel } from "../../models/ColorsModel";
import { Divider } from "../../Styles/views";
import HomeScreenButton from "../Buttons/HomeScreenButton";
import GameSession from "../GameSession";
import Logo from "../Logo";
import QuizModal from "../QuizModal";
import STMText from "../Texts/ShareTechMonoText";
import TopSection from "../TopSection";

interface Props {
  gameSession: AnswerInfo[];
  category: string;
  handlePressHome: () => void;
  handlePressPlayAgain: () => void;
}

const GameOver = ({ gameSession, category, handlePressHome, handlePressPlayAgain }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { themeColors } = useTheme();
  const { playHomeMusic } = useSound();
  const [answerTimes, setAnswerTimes] = useState<number[]>([]);

  let categoryImg = "";
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

  useEffect(() => {
    playHomeMusic();
    extractAnswerTimes();
  }, []);

  function extractAnswerTimes() {
    let times: number[] = [];
    gameSession
      .filter((question) => question.answer?.isCorrect)
      .forEach((question) => {
        times.push(question.answerTime);
      });
    setAnswerTimes(times);
  }

  function getFastestTime() {
    return answerTimes.sort((n1, n2) => n1 - n2)[0];
  }
  function getSlowestTime() {
    return answerTimes.sort((n1, n2) => n1 - n2)[answerTimes.length - 1];
  }
  return (
    <>
      <QuizModal
        show={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
        title={"Game Statistics"}
        headerColor={categoryColor}
        headerImg={categoryImg}
      >
        <GameSession gameSession={gameSession} categoryColor={categoryColor} />
      </QuizModal>

      <TopSection title="game over" />
      <ScoreBox themeColors={themeColors}>
        <TextBox>
          <STMText size={20}>Score</STMText>
          <STMText size={20}>{gameSession.filter((question) => question.answer?.isCorrect).length}/10</STMText>
        </TextBox>
        <Divider style={{ width: "85%", verticalPadding: 0 }} color={themeColors.commons.white} />
        {answerTimes.length !== 0 && (
          <>
            <TextBox>
              <STMText size={20}>Fastest answer</STMText>
              <STMText size={20}>{getFastestTime()}s</STMText>
            </TextBox>
            <Divider style={{ width: "85%" }} color={themeColors.commons.white} />
            <TextBox>
              <STMText size={20}>Slowest answer</STMText>
              <STMText size={20}>{getSlowestTime()}s</STMText>
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
        <HomeScreenButton color={themeColors.lightGreen} title="play again" onPress={handlePressPlayAgain} />
        <HomeScreenButton color={themeColors.mustard} title="main menu" onPress={handlePressHome} />
      </ButtonBox>
      <Logo topMargin={30} size="small" />
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
  /* height: 10px; */
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
