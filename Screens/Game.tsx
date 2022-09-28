import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useReducer, useRef } from "react";
import styled from "styled-components/native";
import { RootStackParams } from "../App";
import Background from "../Components/Background";
import AnswerButton from "../Components/Buttons/AnswerButton";
import Logo from "../Components/Logo";
import TimerBar from "../Components/TimerBar";
import TopSection from "../Components/TopSection";
import { useSound } from "../contexts/SoundContext";
import { useTheme } from "../contexts/ThemeContext";
import { Answer } from "../models/QuizItem";
import { gameReducer } from "../reducers/gameReducer";
import { colors } from "../Styles/Shared";
import { MdText } from "../Styles/texts";
import { Divider } from "../Styles/views";
import QuizItemRandomizer from "../utils/QuizItemRandomizer";

type Props = NativeStackScreenProps<RootStackParams, "Game">;

const GameScreen = ({ navigation, route }: Props) => {
  const [state, dispatch] = useReducer(gameReducer, {
    quizItems: [],
    currentQuestion: 0,
    selectedAnswer: null,
    timeIsUp: false,
    points: 0,
    answerTimes: [],
  });

  // hooks
  const timeLeftRef = useRef(100);
  const { playGameMusic } = useSound();
  const { themeColors } = useTheme();

  // consts
  const lastQuestion = state.currentQuestion === state.quizItems.length - 1;

  // useEffects
  useEffect(() => {
    dispatch({ type: "SET_QUIZ_ITEMS", payload: QuizItemRandomizer(route.params.category, 10) });
  }, []);

  useEffect(() => {
    if (state.timeIsUp) {
      handleSubmit();
    }
  }, [state.timeIsUp]);

  useEffect(() => {
    playGameMusic();
  }, [state.currentQuestion]);

  // functions
  function evaluateAnswerTimes() {
    if (state.selectedAnswer?.isCorrect) {
      let answerTime = 10 - timeLeftRef.current / 10;
      dispatch({ type: "ADD_ANSWER_TIME", payload: answerTime });
    }
  }

  function handlePress(answer: Answer) {
    dispatch({ type: "SET_SELECTED_ANSWER", payload: answer });
  }

  function handleAnswer() {
    if (state.selectedAnswer) {
      state.selectedAnswer.isCorrect && dispatch({ type: "ADD_POINT" });
    }
  }

  function gameOver() {
    navigation.navigate("GameOver", { points: state.points, answerTimes: state.answerTimes });
  }

  function handleSubmit() {
    handleAnswer();
    evaluateAnswerTimes();
    if (!lastQuestion) {
      dispatch({ type: "SET_TIME_IS_UP_FALSE" });
      dispatch({ type: "INCREMENT_CURRENT_QUESTION" });
      dispatch({ type: "SET_SELECTED_ANSWER", payload: null });
    } else {
      gameOver();
      dispatch({ type: "SET_TIME_IS_UP_TRUE" });
    }
  }

  // return null before useEffect run
  if (state.quizItems.length === 0) return null;

  return (
    <Background dark>
      <TopSection title={route.params.category} />
      <QuestionContainer>
        <Question style={{ color: themeColors.commons.white, marginBottom: 10 }}>{state.quizItems[state.currentQuestion].question}</Question>
        <Divider style={{ width: "100%" }} color={themeColors.commons.white} />
        <CurrentQuestion style={{ color: themeColors.commons.white }}>
          {state.currentQuestion + 1} / {state.quizItems.length}
        </CurrentQuestion>
        <AnswerContainer>
          {state.quizItems[state.currentQuestion].answers.map((answer, index) => (
            <AnswerButton onPress={handlePress} answer={answer} index={index} key={index} selectedAnswer={state.selectedAnswer} />
          ))}
        </AnswerContainer>
        <TimerBar setTimeIsUp={dispatch} currentQuestion={state.currentQuestion} timeLeftRef={timeLeftRef} />
        <SubmitButton onPress={handleSubmit} disabled={!state.selectedAnswer ? true : false}>
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

const CurrentQuestion = styled(MdText)`
  margin-top: 10px;
  font-family: ShareTechMono;
  text-align: center;
`;

const AnswerContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px 0 20px 0;
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
