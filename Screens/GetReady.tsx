import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing } from "react-native";
import styled from "styled-components/native";
import { RootStackParams } from "../App";
import Background from "../Components/Background";
import TopSection from "../Components/TopSection";

type Props = NativeStackScreenProps<RootStackParams, "GetReady">;

const GetReadyScreen = ({ navigation, route }: Props) => {
  const animatedCounter = useRef(new Animated.Value(3)).current;
  const [counter, setCounter] = useState("");

  const animate = () => {
    return Animated.timing(animatedCounter, {
      toValue: 0,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(async () => {
      await new Promise((f) => setTimeout(f, 500));
      navigation.navigate("Game", { category: route.params.category });
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
    <Background>
      <TopSection title="get ready" />
      <Animated.View style={{ marginTop: 100 }}>
        <Counter>{counter}</Counter>
      </Animated.View>
    </Background>
  );
};

export default GetReadyScreen;

const Counter = styled.Text`
  align-self: center;
  margin: auto 0;
  color: white;
  font-size: 150px;
  font-family: ShareTechMono;
`;
