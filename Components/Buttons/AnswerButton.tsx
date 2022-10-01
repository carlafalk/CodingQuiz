import React from "react";
import styled from "styled-components/native";
import { useSound } from "../../contexts/SoundContext";
import { useTheme } from "../../contexts/ThemeContext";
import { colorsModel } from "../../models/ColorsModel";
import { Answer } from "../../models/QuizItem";
import STMText from "../Texts/ShareTechMonoText";

interface Props {
  answer: Answer;
  onPress: (answer: Answer) => void;
  selectedAnswer: Answer | null;
  index: number;
}
const AnswerButton = ({ answer, onPress, selectedAnswer, index }: Props) => {
  const { themeColors } = useTheme();
  const { playAnswerSound } = useSound();

  function handlePress() {
    onPress(answer);
    playAnswerSound();
  }
  return (
    <Button onPress={handlePress} index={index} themeColors={themeColors} selectedAnswer={selectedAnswer} thisAnswer={answer}>
      <STMText size={14} center>
        {answer.answer}
      </STMText>
    </Button>
  );
};

export default AnswerButton;

const Button = styled.TouchableOpacity<{
  index: number;
  selectedAnswer: Answer | null;
  thisAnswer: Answer;
  themeColors: colorsModel;
}>`
  width: 45%;
  ${(props) => props.index === 0 && `background-color: ${props.themeColors.anwserButtons.purple}`}
  ${(props) => props.index === 1 && `background-color: ${props.themeColors.anwserButtons.green}`}
  ${(props) => props.index === 2 && `background-color: ${props.themeColors.anwserButtons.orange}`}
  ${(props) => props.index === 3 && `background-color: ${props.themeColors.anwserButtons.blue}`}
  ${(props) => props.selectedAnswer && props.selectedAnswer !== props.thisAnswer && "opacity: 0.5;"}
  border-radius: 10px;
  padding: 20px 5px;
  margin: 5px;
  box-sizing: padding-box;
`;
