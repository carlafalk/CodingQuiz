import React, { useEffect, useReducer, useRef } from "react";
import styled from "styled-components/native";
import { useSound } from "../../contexts/SoundContext";
import { useTheme } from "../../contexts/ThemeContext";
import { useUser } from "../../contexts/UserContext";
import { colorsModel } from "../../models/ColorsModel";
import { GameSessionModel } from "../../models/GameSessionModel";
import { Answer } from "../../models/QuizItem";
import { gameReducer } from "../../reducers/gameReducer";
import { Divider } from "../../Styles/views";
import { buildGameSession } from "../../utils/GameSessionBuilder";
import QuizItemRandomizer from "../../utils/QuizItemRandomizer";
import AnswerButton from "../Buttons/AnswerButton";
import Logo from "../Layout/Logo";
import TopSection from "../Layout/TopSection";
import STMText from "../Texts/ShareTechMonoText";
import TimerBar from "./TimerBar";

interface Props {
  category: string;
  gameIsOver: boolean;
  setGameIsOver: React.Dispatch<React.SetStateAction<boolean>>;
  setGameSession: React.Dispatch<React.SetStateAction<GameSessionModel>>;
  gameSession: GameSessionModel;
}

const RunGame = ({ category, gameIsOver, setGameIsOver, setGameSession, gameSession }: Props) => {
  const [state, dispatch] = useReducer(gameReducer, {
    quizItems: [],
    currentQuestion: 0,
    selectedAnswer: null,
    timeIsUp: false,
    gameSession: gameSession,
  });

  // hooks
  const timeLeftRef = useRef(100);
  const { playGameMusic, playSubmitSound } = useSound();
  const { themeColors } = useTheme();
  const { addGameSession, currentUser } = useUser();

  // consts
  const lastQuestion = state.currentQuestion === state.quizItems.length - 1;

  // useEffects
  useEffect(() => {
    dispatch({ type: "SET_QUIZ_ITEMS", payload: QuizItemRandomizer(category, 10) });
  }, []);

  useEffect(() => {
    if (state.timeIsUp && !gameIsOver) {
      handleSubmit();
    }
  }, [state.timeIsUp]);

  useEffect(() => {
    playGameMusic();
  }, [state.currentQuestion]);

  useEffect(() => {
    if (state.gameSession.answers.length === 10 && currentUser) {
      const latestGameSession = buildGameSession(state.gameSession, currentUser);
      setGameSession(latestGameSession);
      addGameSession(latestGameSession);
      setGameIsOver(true);
    }
  }, [state.gameSession]);

  // functions

  function getAnswerTime() {
    if (state.selectedAnswer) {
      return Number((30 - timeLeftRef.current / 10).toFixed(2));
    } else return -1;
  }

  function handlePress(answer: Answer) {
    dispatch({ type: "SET_SELECTED_ANSWER", payload: answer });
  }

  function handleAnswer() {
    dispatch({
      type: "ADD_ANSWER_INFO",
      payload: { question: state.quizItems[state.currentQuestion].question, answer: state.selectedAnswer, answerTime: getAnswerTime() },
    });
  }

  function handleSubmit() {
    handleAnswer();
    playSubmitSound();

    if (!lastQuestion) {
      dispatch({ type: "SET_TIME_IS_UP_FALSE" });
      dispatch({ type: "INCREMENT_CURRENT_QUESTION" });
      dispatch({ type: "DESELECT_ANSWER" });
    } else {
      dispatch({ type: "SET_TIME_IS_UP_TRUE" });
    }
  }

  // return null before useEffect run
  if (state.quizItems.length === 0) return null;
  return (
    <>
      <TopSection title={category} />
      <QuestionContainer themeColors={themeColors}>
        <Question size={20} center styles={{ marginBottom: 10 }}>
          {state.quizItems[state.currentQuestion].question}
        </Question>
        <Divider style={{ width: "100%" }} color={themeColors.commons.white} />
        <CurrentQuestion size={20} center styles={{ marginTop: 10 }}>
          {state.currentQuestion + 1} / {state.quizItems.length}
        </CurrentQuestion>
        <AnswerContainer>
          {state.quizItems[state.currentQuestion].answers.map((answer, index) => (
            <AnswerButton onPress={handlePress} answer={answer} index={index} key={index} selectedAnswer={state.selectedAnswer} />
          ))}
        </AnswerContainer>
        <TimerBar setTimeIsUp={dispatch} currentQuestion={state.currentQuestion} timeLeftRef={timeLeftRef} />
        <SubmitButton themeColors={themeColors} onPress={handleSubmit} disabled={!state.selectedAnswer ? true : false}>
          <STMText size={15} uppercase>
            submit
          </STMText>
        </SubmitButton>
      </QuestionContainer>
      <Logo topMargin={20} size="small" />
    </>
  );
};

export default RunGame;

const QuestionContainer = styled.View<{ themeColors: colorsModel }>`
  background-color: ${({ themeColors }) => themeColors.deepPurple};
  border-radius: 15px;
  padding: 15px;
  margin: 0 10px;
  align-items: center;
  elevation: 8;
`;

const Question = styled(STMText)``;

const CurrentQuestion = styled(STMText)``;

const AnswerContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px 0 20px 0;
`;

const SubmitButton = styled.Pressable<{ themeColors: colorsModel }>`
  background-color: ${({ themeColors }) => themeColors.success};
  align-items: center;
  border-radius: 15px;
  width: 50%;
  padding: 20px;
  margin-top: 20px;
`;
