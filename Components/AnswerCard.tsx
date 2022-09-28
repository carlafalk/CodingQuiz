import React from "react";
import styled from "styled-components/native";
import { useTheme } from "../contexts/ThemeContext";
import { AnswerInfo } from "../models/AnswerInfo";
import { colorsModel } from "../models/ColorsModel";
import { Divider } from "../Styles/views";
import STMText from "./Texts/ShareTechMonoText";

interface Props {
  answerInfo: AnswerInfo;
  questionNr: number;
}

const AnswerCard = ({ answerInfo, questionNr }: Props) => {
  const { themeColors } = useTheme();

  return (
    <InfoCard themeColors={themeColors} correctAnswer={answerInfo.answer?.isCorrect}>
      <QuestionNumber themeColors={themeColors}>
        <STMText size={25} styles={{ color: themeColors.deepPurple }}>
          {questionNr}
        </STMText>
      </QuestionNumber>

      <STMText size={15} center styles={{ marginLeft: 30 }}>
        {answerInfo.question}
      </STMText>
      <Divider />
      <STMText size={15} center>
        {answerInfo.answer ? "Your answer:" + answerInfo.answer.answer : "You didn't select an answer in time"}
      </STMText>
      <Divider />
      <STMText size={15} center>
        {answerInfo.answer && answerInfo.answer?.isCorrect ? "Answer was: correct" : "Answer was: incorrect"}
      </STMText>
      <Divider />
      <STMText size={15} center>
        {answerInfo.answer && "Answer time: " + answerInfo.answerTime + " seconds"}
      </STMText>
    </InfoCard>
  );
};

export default AnswerCard;

const InfoCard = styled.View<{ themeColors: colorsModel; correctAnswer?: boolean }>`
  background-color: ${({ themeColors, correctAnswer }) => (correctAnswer ? themeColors.success : "red")};
  border-radius: 15px;
  width: 300px;
  margin: 0 10px;
  padding: 5px;
  position: relative;
`;

const QuestionNumber = styled.View<{ themeColors: colorsModel }>`
  background-color: ${({ themeColors }) => themeColors.mustard};
  border-radius: 50px;
  position: absolute;
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  left: -10px;
  top: -2px;
  border: 3px solid ${({ themeColors }) => themeColors.deepPurple};
`;
