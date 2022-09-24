import React from "react";
import styled from "styled-components/native";
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
  function handlePress() {
    onPress(answer);
  }
  return (
    <Button onPress={handlePress} selectedAnswer={selectedAnswer} thisAnswer={answer} index={index}>
      <AnswerText>{answer.answer}</AnswerText>
    </Button>
  );
};

export default AnswerButton;

const Button = styled.TouchableOpacity<{ selectedAnswer: Answer | null; thisAnswer: Answer; index: number }>`
  width: 45%;
  ${(props) => props.index === 0 && `background-color: ${colors.anwserButtons.purple}`}
  ${(props) => props.index === 1 && `background-color: ${colors.anwserButtons.green}`}
  ${(props) => props.index === 2 && `background-color: ${colors.anwserButtons.orange}`}
  ${(props) => props.index === 3 && `background-color: ${colors.anwserButtons.blue}`}
  border-radius: 10px;
  padding: 20px 5px;
  margin: 5px;
  border: ${(props) => (props.selectedAnswer === props.thisAnswer ? `3px solid ${colors.commons.black}` : "none")};
  box-sizing: border-box;
`;

const AnswerText = styled(SmText)`
  text-align: center;
  font-family: ShareTechMono;
`;
