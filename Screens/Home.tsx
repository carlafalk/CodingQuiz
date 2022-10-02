import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useRef, useState } from "react";
import { BigHead } from "react-native-bigheads";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";
import styled from "styled-components/native";
import { RootStackParams } from "../App";
import Background from "../Components/Background";
import StandardButton from "../Components/Buttons/StandardButton";
import Logo from "../Components/Logo";
import QuizModal from "../Components/Modal/QuizModal";
import UserInfo from "../Components/User/UserInfo";
import { useSound } from "../contexts/SoundContext";
import { useTheme } from "../contexts/ThemeContext";
import { useUser } from "../contexts/UserContext";
import { colorsModel } from "../models/ColorsModel";
import { User } from "../models/User";
import SettingsScreen from "./Settings";

type HomeNavigationProps = NativeStackScreenProps<RootStackParams, "Home">;

const HomeScreen = ({ navigation, route }: HomeNavigationProps) => {
  const modalizeRef = useRef<Modalize>(null);
  const { themeColors } = useTheme();
  const { playHomeMusic, isMusicMuted, isLoaded } = useSound();
  const [modalVisible, setModalVisible] = useState(false);

  const { currentUser } = useUser();

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

  const headerImg = <BigHead {...currentUser?.avatar} size={40} />;

  return (
    <Background>
      <QuizModal show={modalVisible} closeModal={() => setModalVisible(false)} title={"selected user"} headerImg={headerImg}>
        <UserInfo handleClose={() => setModalVisible(false)} user={currentUser ? currentUser : ({} as User)} />
      </QuizModal>
      <Logo size="large" topMargin={80} />
      <UserInfoContainer>
        <UserInfoButton onPress={() => setModalVisible(true)}>
          <BigHead {...currentUser?.avatar} size={150} />
          <UserInfoText themeColors={themeColors}>{currentUser?.username}</UserInfoText>
        </UserInfoButton>
      </UserInfoContainer>
      <ButtonContainer>
        <StandardButton onPress={() => navigation.navigate("Categories")} title="Play" color={themeColors.lightGreen} />
        <StandardButton onPress={() => navigation.navigate("About")} title="About" color={themeColors.lightPurple} />
      </ButtonContainer>
      <MenuButton onPress={handleOpen}>
        <MaterialIcons name="settings" size={32} color={themeColors.lightGrey} />
        <MenuButtonText themeColors={themeColors}>Settings</MenuButtonText>
      </MenuButton>
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

const MenuButton = styled.Pressable`
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

const MenuButtonText = styled.Text<{ themeColors: colorsModel }>`
  padding: 10px;
  color: ${({ themeColors }) => themeColors.commons.white};
`;

const UserInfoContainer = styled.View`
  align-items: center;
`;

const UserInfoButton = styled.Pressable`
  align-items: center;
  margin-top: -70;
  width: 50%;
`;

const UserInfoText = styled.Text<{ themeColors: colorsModel }>`
  text-align: center;
  font-size: 16px;
  color: ${({ themeColors }) => themeColors.commons.white};
  background-color: ${({ themeColors }) => themeColors.commons.black};
  border-radius: 10px;
  padding: 8px 12px;
  margin-top: 5px;
`;

const modalRootStyle = {
  backgroundColor: "rgba(0,0,0,0.5)",
};

const modalModalStyle = {
  padding: 20,
  borderRadius: 20,
};

const ButtonContainer = styled.View`
  margin-top: 28px;
`;
