import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { RootStackParams } from "../App";
import Background from "../Components/Background";
import Logo from "../Components/Logo";
import TimerBar from "../Components/TimerBar";
import TopSection from "../Components/TopSection";
import Items from "../data/quizItemData";
import QuizItem from "../models/QuizItem";
import { colors } from "../Styles/Shared";
import { MdText, SmText } from "../Styles/texts";
import { Divider } from "../Styles/views";

type Props = NativeStackScreenProps<RootStackParams, "Game">;

const GameScreen = ({ navigation, route }: Props) => {
  const [questions, setQuestions] = useState<QuizItem[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const randomQuestions = () => {
      const filteredQuestions = Items.filter((item) => item.category === route.params.category);
      const shuffledQuestions = filteredQuestions.sort(() => 0.5 - Math.random());

      return shuffledQuestions.slice(0, 10);
    };
    setQuestions(randomQuestions());
  }, []);

  if (questions.length === 0) return null;

  return (
    <Background dark>
      <TopSection title={route.params.category} />
      <QuestionContainer>
        <Question>{questions[0].question}</Question>
        <Divider style={{ width: "100%" }} />
        <AnswerContainer>
          <AnswerCard>
            <Answer>{questions[0].answers[0].answer}</Answer>
          </AnswerCard>
          <AnswerCard>
            <Answer>{questions[0].answers[1].answer}</Answer>
          </AnswerCard>
          <AnswerCard>
            <Answer>{questions[0].answers[2].answer}</Answer>
          </AnswerCard>
          <AnswerCard>
            <Answer>{questions[0].answers[3].answer}</Answer>
          </AnswerCard>
        </AnswerContainer>
        <TimerBar />
        <SubmitButton>
          <SubmitText>submit</SubmitText>
        </SubmitButton>
      </QuestionContainer>
      <Logo topMargin={20} size="small" />
    </Background>
  );
};

export default GameScreen;

const QuestionContainer = styled.View`
  background-color: ${colors.deepPurple};
  border-radius: 15px;
  padding: 15px;
  margin: 0 10px;
  align-items: center;
  elevation: 8;
`;

const Question = styled(MdText)`
  font-family: ShareTechMono;
  text-align: center;
`;

const AnswerContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px 0;
`;

const AnswerCard = styled.View`
  width: 45%;
  background-color: ${colors.lightPurple};
  border-radius: 10px;
  padding: 20px 5px;
  margin: 5px;
`;

const Answer = styled(SmText)`
  text-align: center;
  font-family: ShareTechMono;
`;

const SubmitButton = styled.TouchableOpacity`
  background-color: ${colors.success};
  align-items: center;
  border-radius: 15px;
  width: 50%;
  padding: 20px;
  margin-top: 20px;
`;

const SubmitText = styled.Text`
  text-transform: uppercase;
  color: ${colors.commons.white};
  font-family: ShareTechMono;
  font-size: 15px;
`;
