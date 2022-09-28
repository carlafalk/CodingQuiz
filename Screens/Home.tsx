import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useRef } from "react";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";
import styled from "styled-components/native";
import { RootStackParams } from "../App";
import Background from "../Components/Background";
import HomeScreenButton from "../Components/Buttons/HomeScreenButton";
import Logo from "../Components/Logo";
import { useSound } from "../contexts/SoundContext";
import { useTheme } from "../contexts/ThemeContext";
import SettingsScreen from "./Settings";

type HomeNavigationProps = NativeStackScreenProps<RootStackParams, "Home">;

const HomeScreen = ({ navigation }: HomeNavigationProps) => {
  const modalizeRef = useRef<Modalize>(null);
  const { isDarkTheme, toggleTheme, themeColors } = useTheme();
  const HomeScreenMusic = require("../assets/sounds/HomeScreenMusic.mp3");
  const { playSound, toggleMuteMusic, toggleMuteButtonSound, isMusicMuted, isLoaded } = useSound();

  console.log("homescreen re rendered");

  const handleOpen = () => {
    modalizeRef.current?.open();
  };

  useEffect(() => {
    console.log("useEffect");
    if (isLoaded) {
      console.log(isLoaded);
      if (!isMusicMuted) {
        console.log("ismUsciMuted");
        playSound(HomeScreenMusic);
      }
    }
  }, [isLoaded, isMusicMuted]);

  return (
    <Background>
      <Logo size="large" topMargin={124} />
      <ButtonContainer>
        <HomeScreenButton onPress={() => navigation.navigate("Categories")} title="Play" color={themeColors.lightGreen} />
        <HomeScreenButton onPress={handleOpen} title="Settings" color={themeColors.mustard} />
        <HomeScreenButton onPress={() => navigation.navigate("About")} title="About" color={themeColors.lightPurple} />
      </ButtonContainer>
      <Modalize
        ref={modalizeRef}
        rootStyle={modalRootStyle}
        modalStyle={{ backgroundColor: themeColors.deepPurple, ...modalModalStyle }}
        modalTopOffset={150}
      >
        <SettingsScreen />
      </Modalize>
    </Background>
  );
};

export default gestureHandlerRootHOC(HomeScreen);

const modalRootStyle = {
  backgroundColor: "rgba(0,0,0,0.5)",
};

const modalModalStyle = {
  padding: 20,
  borderRadius: 20,
  flex: 1,
};

const ButtonContainer = styled.View`
  margin-top: 48px;
`;
