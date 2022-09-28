import React from "react";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";
import { Answer } from "../../models/QuizItem";
import { colors } from "../../Styles/Shared";
import STMText from "../Texts/ShareTechMonoText";

interface Props {
  answer: Answer;
  onPress: (answer: Answer) => void;
  selectedAnswer: Answer | null;
  index: number;
}
const AnswerButton = ({ answer, onPress, selectedAnswer, index }: Props) => {
  const { themeColors } = useTheme();

  function handlePress() {
    onPress(answer);
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
}>`
  width: 45%;
  ${(props) => props.index === 0 && `background-color: ${colors.anwserButtons.purple}`}
  ${(props) => props.index === 1 && `background-color: ${colors.anwserButtons.green}`}
  ${(props) => props.index === 2 && `background-color: ${colors.anwserButtons.orange}`}
  ${(props) => props.index === 3 && `background-color: ${colors.anwserButtons.blue}`}
  ${(props) => props.selectedAnswer && props.selectedAnswer !== props.thisAnswer && "opacity: 0.5;"}
  border-radius: 10px;
  padding: 20px 5px;
  margin: 5px;
  box-sizing: padding-box;
`;
