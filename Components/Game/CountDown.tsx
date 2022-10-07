import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing } from "react-native";
import styled from "styled-components/native";
import { useSound } from "../../contexts/SoundContext";
import TopSection from "../Layout/TopSection";
import STMText from "../Texts/ShareTechMonoText";

interface Props {
  setCountingDown: React.Dispatch<React.SetStateAction<boolean>>;
}

const CountDown = ({ setCountingDown }: Props) => {
  const animatedCounter = useRef(new Animated.Value(3)).current;
  const [counter, setCounter] = useState("");
  const { playGetReadySound } = useSound();

  useEffect(() => {
    playGetReadySound();
  }, []);

  const animate = () => {
    return Animated.timing(animatedCounter, {
      toValue: 0,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(async () => {
      await new Promise((f) => setTimeout(f, 1000));
      setCountingDown(false);
    });
  };

  useEffect(() => {
    animate();
    animatedCounter.addListener((value) => {
      setCounter(Math.ceil(value.value).toString());
    });
    return () => {
      animatedCounter.removeAllListeners();
    };
  }, []);

  return (
    <>
      <TopSection title="get ready" />
      <Animated.View style={{ marginTop: 100 }}>
        <Counter size={150} center>
          {counter}
        </Counter>
      </Animated.View>
    </>
  );
};

export default CountDown;

const Counter = styled(STMText)`
  margin: auto 0;
`;
