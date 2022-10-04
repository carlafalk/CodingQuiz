import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import Background from "../Components/Background";

const LeaderboardScreen = () => {
  return (
    <Background>
      <View>
        <Text>LeaderboardScreen</Text>
      </View>
    </Background>
  );
};

export default LeaderboardScreen;

const container = styled.View`
  background-color: bluer;
`;
