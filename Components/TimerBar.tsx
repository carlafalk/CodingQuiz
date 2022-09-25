import React, { useEffect } from "react";
import styled from "styled-components/native";
import { colors } from "../Styles/Shared";

interface Props {
  setTimeIsUp: React.Dispatch<React.SetStateAction<boolean>>;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
  currentQuestion: number;
  timeLeft: number;
}

const TimerBar = ({ setTimeIsUp, currentQuestion, setTimeLeft, timeLeft }: Props) => {
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
    timeLeft === 0 && setTimeIsUp(true);
  }, [timeLeft]);

  return (
    <TimeBar>
      <RemainingTimeBar width={timeLeft} />
      <TimeBarShine />
      <TimeBarClock>
        <TimeBarTime>{timeLeft / 10}</TimeBarTime>
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

const RemainingTimeBar = styled.View<{ width: number }>`
  background-color: ${colors.lightGreen};
  border-radius: 8px;
  width: ${(props) => props.width}%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const TimeBarShine = styled.View`
  top: 1px;
  height: 10px;
  width: 98%;
  background-color: #ffffff6e;
  border-radius: 10px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const TimeBarClock = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  top: -15px;
  right: 5px;
  height: 60px;
  width: 60px;
  background-color: ${colors.lightPurple};
  border: 5px solid ${colors.mustard};
  border-radius: 50px;
  elevation: 8;
`;

const TimeBarTime = styled.Text`
  font-family: "ShareTechMono";
  font-size: 20px;
  color: ${colors.lightGreen};
`;
