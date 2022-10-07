import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";
import { AnswerInfo } from "../../models/AnswerInfo";
import { colorsModel } from "../../models/ColorsModel";
import { Divider } from "../../Styles/views";
import STMText from "../Texts/ShareTechMonoText";

interface Props {
  answerInfo: AnswerInfo;
  questionNr: number;
  categoryColor: string;
}

const AnswerCard = ({ answerInfo, questionNr, categoryColor }: Props) => {
  const { themeColors } = useTheme();

  return (
    <InfoCard themeColors={themeColors} correctAnswer={answerInfo.answer?.isCorrect}>
      <QuestionNumber themeColors={themeColors} categoryColor={categoryColor}>
        <STMText size={25} styles={{ color: themeColors.deepPurple }}>
          {questionNr}
        </STMText>
      </QuestionNumber>
      <QuestionContainer>
        <STMText size={20} styles={{ marginLeft: 25 }}>
          {answerInfo.question}
        </STMText>
      </QuestionContainer>
      <Divider color={themeColors.commons.white} />
      <SectionContainer>
        {answerInfo.answer?.isCorrect ? (
          <MaterialCommunityIcons name="check-bold" size={40} color={themeColors.lightGreen} />
        ) : (
          <MaterialCommunityIcons name="close-thick" size={40} color={themeColors.danger} />
        )}
        <STMText size={18} styles={{ marginHorizontal: 10, maxWidth: "80%" }}>
          {answerInfo.answer ? "You answered:\n" + answerInfo.answer.answer : "You didn't select an answer in time"}
        </STMText>
      </SectionContainer>
      <Divider color={themeColors.commons.white} />
      {answerInfo.answer && answerInfo.answer.isCorrect && (
        <SectionContainer>
          <MaterialIcons name="timer" size={40} color={themeColors.mustard} />
          <STMText size={18} styles={{ marginHorizontal: 10 }}>
            {answerInfo.answerTime + " second(s)"}
          </STMText>
        </SectionContainer>
      )}
    </InfoCard>
  );
};

export default AnswerCard;

const InfoCard = styled.View<{ themeColors: colorsModel; correctAnswer?: boolean }>`
  background-color: ${({ themeColors }) => themeColors.lightPurple};
  border-radius: 15px;
  width: 300px;
  margin: 0 10px;
  padding: 5px;
  position: relative;
`;

const QuestionNumber = styled.View<{ themeColors: colorsModel; categoryColor: string }>`
  background-color: ${({ categoryColor }) => categoryColor};
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

const QuestionContainer = styled.View`
  margin-bottom: 10px;
`;

const SectionContainer = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
`;
