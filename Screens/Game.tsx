import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components/native";
import { RootStackParams } from "../App";
import Background from "../Components/Background";
import AnswerButton from "../Components/Buttons/AnswerButton";
import Logo from "../Components/Logo";
import TimerBar from "../Components/TimerBar";
import TopSection from "../Components/TopSection";
import { useSound } from "../contexts/SoundContext";
import QuizItem, { Answer } from "../models/QuizItem";
import { colors } from "../Styles/Shared";
import { MdText } from "../Styles/texts";
import { Divider } from "../Styles/views";
import QuizItemRandomizer from "../utils/QuizItemRandomizer";

type Props = NativeStackScreenProps<RootStackParams, "Game">;

let answerTimes: number[] = [];

const GameScreen = ({ navigation, route }: Props) => {
  const [quizItems, setQuizItems] = useState<QuizItem[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
  const [timeIsUp, setTimeIsUp] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(0);

  // hooks
  const timeLeftRef = useRef(100);
  const { playSound } = useSound();

  // consts
  const gameMusic = require("../assets/sounds/GameMusic.mp3");
  const lastQuestion = currentQuestion === quizItems.length - 1;

  // useEffects
  useEffect(() => {
    setQuizItems(QuizItemRandomizer(route.params.category, 10));
    answerTimes = [];
  }, []);

  useEffect(() => {
    if (timeIsUp) {
      handleTimeIsUp();
    }
  }, [timeIsUp]);

  useEffect(() => {
    playSound(gameMusic);
  }, [currentQuestion]);

  // functions
  function evaluateAnswerTimes() {
    let answerTime = 10 - timeLeftRef.current / 10;
    answerTimes.push(answerTime);
  }

  function handlePress(answer: Answer) {
    setSelectedAnswer(answer);
  }

  function handleAnswer() {
    if (selectedAnswer) {
      selectedAnswer.isCorrect && setPoints((prev) => prev + 1);
    }
  }

  function handleTimeIsUp() {
    setTimeIsUp(false);
    handleAnswer();
    lastQuestion ? gameOver() : setCurrentQuestion((prev) => prev + 1);
  }

  function gameOver() {
    navigation.navigate("GameOver", { points: points, category: route.params.category, answerTimes: answerTimes });
  }

  function handleSubmit() {
    if (!lastQuestion) {
      handleAnswer();
      setTimeIsUp(false);
      setCurrentQuestion((prev) => prev + 1);
      evaluateAnswerTimes();
      setSelectedAnswer(null);
    } else {
      evaluateAnswerTimes();
      gameOver();
      setTimeIsUp(true);
    }
  }

  // return null before useEffect run
  if (quizItems.length === 0) return null;

  return (
    <Background dark>
      <TopSection title={route.params.category} />
      <QuestionContainer>
        <Question>{quizItems[currentQuestion].question}</Question>
        <Divider style={{ width: "100%" }} />
        <AnswerContainer>
          {quizItems[currentQuestion].answers.map((answer, index) => (
            <AnswerButton onPress={handlePress} answer={answer} index={index} key={index} selectedAnswer={selectedAnswer} />
          ))}
        </AnswerContainer>
        <TimerBar setTimeIsUp={setTimeIsUp} currentQuestion={currentQuestion} timeLeftRef={timeLeftRef} />
        <SubmitButton onPress={handleSubmit} disabled={!selectedAnswer ? true : false}>
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
