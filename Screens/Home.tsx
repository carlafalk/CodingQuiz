import { FontAwesome } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useRef, useState } from "react";
import { Pressable } from "react-native";
import { BigHead } from "react-native-bigheads";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";
import styled from "styled-components/native";
import { RootStackParams } from "../App";
import Background from "../Components/Background";
import HomeScreenButton from "../Components/Buttons/HomeScreenButton";
import Logo from "../Components/Logo";
import QuizModal from "../Components/Modal/QuizModal";
import UserInfo from "../Components/User/UserInfo";
import { useSound } from "../contexts/SoundContext";
import { useTheme } from "../contexts/ThemeContext";
import { useUser } from "../contexts/UserContext";
import { User } from "../models/User";
import SettingsScreen from "./Settings";

type HomeNavigationProps = NativeStackScreenProps<RootStackParams, "Home">;

const HomeScreen = ({ navigation, route }: HomeNavigationProps) => {
  const modalizeRef = useRef<Modalize>(null);
  const { themeColors } = useTheme();
  const { playHomeMusic, isMusicMuted, isLoaded } = useSound();
  const [modalVisible, setModalVisible] = useState(false);

  const { currentUser, logOutUser } = useUser();

  const handleOpen = () => {
    modalizeRef.current?.open();
  };

  useEffect(() => {
    if (isLoaded) {
      if (!isMusicMuted) {
        playHomeMusic();
      }
    }
  }, [isLoaded, isMusicMuted]);

  useEffect(() => {
    !currentUser && navigation.navigate("LogIn");
  }, [currentUser]);

  const handleLogOut = () => {
    logOutUser();
  };

  const headerImg = <BigHead {...currentUser?.avatar} size={40} />;

  return (
    <Background>
      <QuizModal show={modalVisible} closeModal={() => setModalVisible(false)} title={"selected user"} headerImg={headerImg}>
        <UserInfo handleClose={() => setModalVisible(false)} user={currentUser ? currentUser : ({} as User)} />
      </QuizModal>
      {/* logoutbutton */}
      <Pressable onPress={() => handleLogOut()} style={{ marginTop: 120, right: 60, position: "absolute", zIndex: 999 }}>
        <FontAwesome name="user-circle-o" size={24} color={themeColors.lightGrey} />
      </Pressable>
      {/* UserInfo */}
      <Pressable onPress={() => setModalVisible(true)} style={{ marginTop: 120, right: 20, position: "absolute", zIndex: 999 }}>
        <FontAwesome name="user-circle-o" size={24} color={themeColors.lightGrey} />
      </Pressable>
      <Logo size="large" topMargin={120} />
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
};

const ButtonContainer = styled.View`
  margin-top: 48px;
`;
