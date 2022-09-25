import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useRef } from "react";
import { Pressable, Text } from "react-native";
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
  // const ButtonEffect = require("../assets/sounds/StandardButtonEffect.mp3");
  const { playSound, toggleMuteMusic, toggleMuteButtonSound } = useSound();

  // Temp const
  // const handleToggle = () => {
  //   toggleTheme();
  //   console.log(isDarkTheme ? "Switched to dark" : "Switched to light");
  // };

  const handleOpen = () => {
    modalizeRef.current?.open();
  };

  useEffect(() => {
    playSound(HomeScreenMusic);
  }, [navigation]);

  return (
    <Background>
      <Logo size="large" topMargin={124} />
      {/* TEMP BUTTON */}
{/*       
      <Pressable onPress={handleToggle}>
        <Text style={{ padding: 10, color: themeColors.commons.black, backgroundColor: themeColors.commons.white }}>
          {isDarkTheme ? "Switch to light" : "Switch to dark"}
        </Text>
      </Pressable> */}
      <ButtonContainer>
        <HomeScreenButton onPress={() => navigation.navigate("Categories")} title="Play" color={themeColors.lightGreen} />
        <HomeScreenButton onPress={handleOpen} title="Settings" color={themeColors.mustard} />
        <HomeScreenButton onPress={() => navigation.navigate("About")} title="About" color={themeColors.lightPurple} />
        <HomeScreenButton
          onPress={() => {
            toggleMuteMusic();
          }}
          title="mute music"
          color={colors.categories.javaScript}
        />
        <HomeScreenButton
          onPress={() => {
            toggleMuteButtonSound();
          }}
          title="disable btn sound"
          color={colors.categories.javaScript}
        />
      </ButtonContainer>
      <Modalize ref={modalizeRef} rootStyle={modalRootStyle} modalStyle={{backgroundColor: themeColors.deepPurple, ...modalModalStyle}} modalTopOffset={150}>
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
