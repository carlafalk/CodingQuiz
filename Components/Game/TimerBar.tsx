import React, { useEffect, useState } from "react";
import { ImageBackground } from "react-native";
import styled from "styled-components/native";
import TimerBlur from "../../assets/Images/timer_blur.png";
import { useTheme } from "../../contexts/ThemeContext";
import { colorsModel } from "../../models/ColorsModel";
import { KnownAction } from "../../reducers/types";
import STMText from "../Texts/ShareTechMonoText";

interface Props {
  setTimeIsUp: React.Dispatch<KnownAction>;
  timeLeftRef: React.MutableRefObject<number>;
  currentQuestion: number;
}

const TimerBar = ({ setTimeIsUp, currentQuestion, timeLeftRef }: Props) => {
  const [timeLeft, setTimeLeft] = useState(300);
  const { themeColors } = useTheme();

  useEffect(() => {
    let timer = setInterval(() => {
      setTimeLeft((prev) => {
        prev <= 0 && clearInterval(timer);

        return prev > 0 ? prev - 0.5 : 0;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setTimeLeft(300);
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
        <ImageBackground source={TimerBlur} style={{ width: 60, height: 60, alignItems: "center", justifyContent: "center" }}>
          <TimeBarTime size={20} themeColors={themeColors}>
            {Math.round(timeLeft / 10)}
          </TimeBarTime>
        </ImageBackground>
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
  width: ${(props) => props.width / 3}%;
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
  border-radius: 50px;
  elevation: 8;
`;

const TimeBarTime = styled(STMText)<{ themeColors: colorsModel }>`
  color: ${({ themeColors }) => themeColors.lightGreen};
`;
