import React from "react";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";
import { colorsModel } from "../../models/ColorsModel";
import { Answer } from "../../models/QuizItem";
import { colors } from "../../Styles/Shared";
import { SmText } from "../../Styles/texts";

interface Props {
  answer: Answer;
  onPress: (answer: Answer) => void;
  selectedAnswer: Answer | null;
  index: number;
}
const AnswerButton = ({ answer, onPress, selectedAnswer, index }: Props) => {
  const { themeColors } = useTheme();

  // code snippet for lighten hex-color by percentage

  // const lightenColor = function (color: string, percent: number) {
  //   var num = parseInt(color.replace("#",""), 16),
  //     amt = Math.round(2.55 * percent),
  //     R = (num >> 16) + amt,
  //     B = ((num >> 8) & 0x00ff) + amt,
  //     G = (num & 0x0000ff) + amt;

  //   return (0x1000000 + (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 + (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 + (G < 255 ? (G < 1 ? 0 : G) : 255))
  //     .toString(16)
  //     .slice(1);
  // };

  function handlePress() {
    onPress(answer);
  }
  return (
    <Button onPress={handlePress} selectedAnswer={selectedAnswer} thisAnswer={answer} index={index} themeColors={themeColors}>
      <AnswerText themeColors={themeColors} selectedAnswer={selectedAnswer} thisAnswer={answer}>
        {answer.answer}
      </AnswerText>
    </Button>
  );
};

export default AnswerButton;

const Button = styled.TouchableOpacity<{
  selectedAnswer: Answer | null;
  thisAnswer: Answer;
  index: number;
}>`
  width: 45%;
  ${(props) => props.index === 0 && `background-color: ${colors.anwserButtons.purple}`}
  ${(props) => props.index === 1 && `background-color: ${colors.anwserButtons.green}`}
  ${(props) => props.index === 2 && `background-color: ${colors.anwserButtons.orange}`}
  ${(props) => props.index === 3 && `background-color: ${colors.anwserButtons.blue}`}
  border-radius: 10px;
  padding: 20px 5px;
  margin: 5px;
  /* border: ${(props) => (props.selectedAnswer === props.thisAnswer ? `3px solid ${colors.commons.black}` : "none")}; */
  box-sizing: padding-box;
`;

const AnswerText = styled(SmText)<{ themeColors: colorsModel; selectedAnswer: Answer | null; thisAnswer: Answer }>`
  text-align: center;
  font-family: ShareTechMono;
  color: ${(props) => props.themeColors.commons.white};
  text-decoration: ${(props) => (props.selectedAnswer === props.thisAnswer ? `underline ${props.themeColors.commons.black}` : "none")};
`;
