import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import styled from "styled-components/native";
import { RootStackParams } from "../App";
import Background from "../Components/Background";
import HomeScreenButton from "../Components/Buttons/HomeScreenButton";
import Logo from "../Components/Logo";
import TopSection from "../Components/TopSection";
import { colors } from "../Styles/Shared";
import { Divider } from "../Styles/views";

type Props = NativeStackScreenProps<RootStackParams, "GameOver">;

const GameOverScreen = ({ navigation, route }: Props) => {
  return (
    <Background>
      <TopSection title="game over" />
      <ScoreBox>
        <TextBox>
          <StyledText>Score</StyledText>
          <StyledText>{route.params.points}/10</StyledText>
        </TextBox>
        <Divider style={{ width: "85%", verticalPadding: 0 }} />
        <TextBox>
          <StyledText>Fastest answer</StyledText>
          <StyledText>2.5s</StyledText>
        </TextBox>
        <Divider style={{ width: "85%" }} />
        <TextBox>
          <StyledText>Slowest answer</StyledText>
          <StyledText>10s</StyledText>
        </TextBox>
      </ScoreBox>

      <ButtonBox>
        <HomeScreenButton
          color={colors.lightGreen}
          title="restart"
          onPress={() => navigation.navigate("Game", { category: route.params.category })}
        />
        <HomeScreenButton
          color={colors.mustard}
          title="main menu"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      </ButtonBox>
      <Logo topMargin={30} size="small" />
    </Background>
  );
};

export default GameOverScreen;

const ScoreBox = styled.View`
  background-color: ${colors.deepPurple};
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  border-radius: 14px;
  /* height: 10px; */
`;

const ButtonBox = styled.View`
  margin-top: 67px;
`;

const TextBox = styled.View`
  margin: 0 21px;
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
  padding: 15px 0;
`;

const StyledText = styled.Text`
  font-family: ShareTechMono;
  color: white;
  font-size: 20px;
`;