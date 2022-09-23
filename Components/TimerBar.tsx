import Constants from "expo-constants";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { colors } from "../Styles/Shared";

const TimerBar = () => {
  const [timeLeft, setTimeLeft] = useState(100);
  const [timeIsUp, setTimeIsUp] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (timeLeft > 0) setTimeLeft((prev) => prev - 10);

      if (timeLeft === 0) {
        setTimeIsUp(true);
        window.clearInterval(timer);
      }
    }, 1000);

    return () => window.clearInterval(timer);
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

const TimeBarContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: ${Constants.statusBarHeight}px;
  padding: 1px;
`;

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
