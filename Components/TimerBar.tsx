import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { useTheme } from "../contexts/ThemeContext";
import { colorsModel } from "../models/ColorsModel";
import { KnownAction } from "../reducers/types";

interface Props {
  setTimeIsUp: React.Dispatch<KnownAction>;
  timeLeftRef: React.MutableRefObject<number>;
  currentQuestion: number;
}

const TimerBar = ({ setTimeIsUp, currentQuestion, timeLeftRef }: Props) => {
  const [timeLeft, setTimeLeft] = useState(100);
  const { themeColors } = useTheme();

  useEffect(() => {
    let timer = setInterval(() => {
      setTimeLeft((prev) => {
        prev <= 0 && clearInterval(timer);

        return prev > 0 ? prev - 10 : 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setTimeLeft(100);
  }, [currentQuestion]);

  useEffect(() => {
    timeLeftRef.current = timeLeft;
    timeLeft === 0 && setTimeIsUp({ type: "SET_TIME_IS_UP_TRUE" });
  }, [timeLeft]);

  return (
    <TimeBar>
      <RemainingTimeBar themeColors={themeColors} width={timeLeft} />
      <TimeBarShine themeColors={themeColors} />
      <TimeBarClock themeColors={themeColors}>
        <TimeBarTime themeColors={themeColors}>{timeLeft / 10}</TimeBarTime>
      </TimeBarClock>
    </TimeBar>
  );
};

export default TimerBar;

const TimeBar = styled.View`
  justify-content: center;
  flex-direction: row;
  height: 30px;
  width: 80%;
  border-radius: 10px;
  border: 2px solid black;
`;

const RemainingTimeBar = styled.View<{ width: number; themeColors: colorsModel }>`
  background-color: ${({ themeColors }) => themeColors.lightGreen};
  border-radius: 8px;
  width: ${(props) => props.width}%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const TimeBarShine = styled.View<{ themeColors: colorsModel }>`
  top: 1px;
  height: 10px;
  width: 98%;
  background-color: #ffffff6e;
  border-radius: 10px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const TimeBarClock = styled.View<{ themeColors: colorsModel }>`
  position: absolute;
  justify-content: center;
  align-items: center;
  top: -15px;
  right: 5px;
  height: 60px;
  width: 60px;
  background-color: ${({ themeColors }) => themeColors.lightPurple};
  border: 5px solid ${({ themeColors }) => themeColors.mustard};
  border-radius: 50px;
  elevation: 8;
`;

const TimeBarTime = styled.Text<{ themeColors: colorsModel }>`
  font-family: "ShareTechMono";
  font-size: 20px;
  color: ${({ themeColors }) => themeColors.lightGreen};
`;
