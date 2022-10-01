import React, { useEffect, useState } from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";
import { useSound } from "../../contexts/SoundContext";
import { useTheme } from "../../contexts/ThemeContext";
import { AnswerInfo } from "../../models/AnswerInfo";
import { colorsModel } from "../../models/ColorsModel";
import { Divider } from "../../Styles/views";
import HomeScreenButton from "../Buttons/HomeScreenButton";
import GameSession from "../GameSession";
import Logo from "../Logo";
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
      <Modal
        statusBarTranslucent={true}
        animationType="fade"
        transparent={true}
        visible={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
      >
        <GameSession gameSession={gameSession} closeModal={setModalIsOpen} category={category} />
      </Modal>
      <TopSection title="game over" />
      <ScoreBox themeColors={themeColors}>
        <TextBox>
          <StyledText>Score</StyledText>
          <StyledText>{gameSession.filter((question) => question.answer?.isCorrect).length}/10</StyledText>
        </TextBox>
        <Divider style={{ width: "85%", verticalPadding: 0 }} color={themeColors.commons.white} />
        {answerTimes.length !== 0 && (
          <>
            <TextBox>
              <StyledText>Fastest answer</StyledText>
              <StyledText>{getFastestTime()}s</StyledText>
            </TextBox>
            <Divider style={{ width: "85%" }} color={themeColors.commons.white} />
            <TextBox>
              <StyledText>Slowest answer</StyledText>
              <StyledText>{getSlowestTime()}s</StyledText>
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

const StyledText = styled.Text`
  font-family: ShareTechMono;
  color: white;
  font-size: 20px;
`;

const StatsButton = styled.TouchableOpacity<{ color: string }>`
  background-color: ${({ color }) => color};
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
