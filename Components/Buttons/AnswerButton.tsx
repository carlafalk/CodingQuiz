import React from "react";
import styled from "styled-components/native";
import { Answer } from "../../models/QuizItem";
import { colors } from "../../Styles/Shared";
import { SmText } from "../../Styles/texts";

interface Props {
  answer: Answer;
  onPress: (answer: Answer) => void;
  selectedAnswer: Answer | null;
}
const AnswerButton = ({ answer, onPress, selectedAnswer }: Props) => {
  console.log("selected i button:");
  console.log({ selectedAnswer });
  function handlePress() {
    onPress(answer);
  }
  return (
    <Button onPress={handlePress} selected={selectedAnswer} this={answer}>
      <AnswerText>{answer.answer}</AnswerText>
    </Button>
  );
};

export default AnswerButton;

const Button = styled.TouchableOpacity<{ selected: Answer | null; this: Answer }>`
  width: 45%;
  background-color: ${colors.lightPurple};
  border-radius: 10px;
  padding: 20px 5px;
  margin: 5px;
  border: ${(props) => (props.selected === props.this ? `3px solid ${colors.commons.black}` : "none")};
  box-sizing: border-box;
`;

const AnswerText = styled(SmText)`
  text-align: center;
  font-family: ShareTechMono;
`;
