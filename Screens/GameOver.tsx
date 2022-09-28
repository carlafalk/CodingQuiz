import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import styled from "styled-components/native";
import { RootStackParams } from "../App";
import Background from "../Components/Background";
import HomeScreenButton from "../Components/Buttons/HomeScreenButton";
import Logo from "../Components/Logo";
import TopSection from "../Components/TopSection";
import { useSound } from "../contexts/SoundContext";
import { useTheme } from "../contexts/ThemeContext";
import { colors } from "../Styles/Shared";
import { Divider } from "../Styles/views";

type Props = NativeStackScreenProps<RootStackParams, "GameOver">;

const GameOverScreen = ({ navigation, route }: Props) => {
  const { themeColors } = useTheme();
  const { playHomeMusic } = useSound();

  useEffect(() => {
    playHomeMusic();
  }, []);

  function getFastestTime() {
    return route.params.answerTimes.sort((n1, n2) => n1 - n2)[0];
  }
  function getSlowestTime() {
    return route.params.answerTimes.sort((n1, n2) => n1 - n2)[route.params.answerTimes.length - 1];
  }

  return (
    <Background>
      <TopSection title="game over" />
      <ScoreBox>
        <TextBox>
          <StyledText>Score</StyledText>
          <StyledText>{route.params.points}/10</StyledText>
        </TextBox>
        <Divider style={{ width: "85%", verticalPadding: 0 }} color={themeColors.commons.white} />
        <TextBox>
          <StyledText>Fastest answer</StyledText>
          <StyledText>{getFastestTime()}s</StyledText>
        </TextBox>
        <Divider style={{ width: "85%" }} color={themeColors.commons.white} />
        <TextBox>
          <StyledText>Slowest answer</StyledText>
          <StyledText>{getSlowestTime()}s</StyledText>
        </TextBox>
      </ScoreBox>

      <ButtonBox>
        <HomeScreenButton
          color={colors.lightGreen}
          title="play again"
          onPress={() => {
            navigation.navigate("Categories");
          }}
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
