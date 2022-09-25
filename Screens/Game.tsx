import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { RootStackParams } from "../App";
import Background from "../Components/Background";
import AnswerButton from "../Components/Buttons/AnswerButton";
import Logo from "../Components/Logo";
import TimerBar from "../Components/TimerBar";
import TopSection from "../Components/TopSection";
import { useSound } from "../Contexts/SoundContext";
import Items from "../data/quizItemData";
import QuizItem, { Answer } from "../models/QuizItem";
import { colors } from "../Styles/Shared";
import { MdText } from "../Styles/texts";
import { Divider } from "../Styles/views";

type Props = NativeStackScreenProps<RootStackParams, "Game">;

const GameScreen = ({ navigation, route }: Props) => {
  const [questions, setQuestions] = useState<QuizItem[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
  const [timeIsUp, setTimeIsUp] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(0);

  const gameMusic = require("../assets/sounds/GameMusic.mp3");

  const { playSound, stopSound } = useSound();
  console.log("gameScreen re-render");

  useEffect(() => {
    const randomQuestions = () => {
      const filteredQuestions = Items.filter((item) => item.category === route.params.category);
      const shuffledQuestions = filteredQuestions.sort(() => 0.5 - Math.random());

      return shuffledQuestions.slice(0, 10);
    };
    setQuestions(randomQuestions());
  }, []);

  useEffect(() => {
    if (timeIsUp) {
      handleTimeIsUp();
    }
  }, [timeIsUp]);

  useEffect(() => {
    playSound(gameMusic);
  }, [currentQuestion]);

  if (questions.length === 0) return null;

  function handlePress(answer: Answer) {
    setSelectedAnswer(answer);
  }

  function handleAnswer() {
    if (selectedAnswer) {
      selectedAnswer.isCorrect && setPoints((prev) => prev + 1);
    }
  }

  const handleTimeIsUp = () => {
    setTimeIsUp(false);
    currentQuestion !== questions.length - 1
      ? setCurrentQuestion((prev) => prev + 1)
      : navigation.navigate("GameOver", { points: points, category: route.params.category });
  };

  function handleSubmit() {
    console.log("Submittar");
    // if selectedAnswer.correct, setPoints prev + 1 pts
    // if !selecteAnser, submit
    // if selectedAsnwer.false, 0pts
    if (currentQuestion !== questions.length - 1) {
      handleAnswer();
      setTimeIsUp(false);
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      navigation.navigate("GameOver", { points: points, category: route.params.category });
      console.log(`Game over! You scored ${points} / ${questions.length}`);
      setTimeIsUp(true);
    }
  }

  return (
    <Background dark>
      <TopSection title={route.params.category} />
      <QuestionContainer>
        <Question>{questions[currentQuestion].question}</Question>
        <Divider style={{ width: "100%" }} />
        <AnswerContainer>
          {questions[currentQuestion].answers.map((answer, index) => (
            <AnswerButton onPress={handlePress} answer={answer} index={index} key={index} selectedAnswer={selectedAnswer} />
          ))}
        </AnswerContainer>
        <TimerBar setTimeIsUp={setTimeIsUp} currentQuestion={currentQuestion} />
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
