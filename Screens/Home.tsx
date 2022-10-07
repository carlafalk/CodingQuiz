import { MaterialIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useRef, useState } from "react";
import { BigHead } from "react-native-bigheads";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";
import styled from "styled-components/native";
import { RootStackParams } from "../App";
import StandardButton from "../Components/Buttons/StandardButton";
import Background from "../Components/Layout/Background";
import Logo from "../Components/Layout/Logo";
import QuizModal from "../Components/Modal/QuizModal";
import RegularText from "../Components/Texts/RegularText";
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

  useFocusEffect(() => {
    !currentUser && navigation.navigate("LogIn");
  });

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
      <QuizModal show={modalVisible} closeModal={() => setModalVisible(false)} title={"selected user"} headerImg={headerImg} modalHeight={"85%"}>
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
        <StandardButton onPress={() => navigation.navigate("Leaderboard")} title="Leaderboard" color={themeColors.mustard} />
      </ButtonContainer>
      <MenuButtonContainer>
        <MenuButton onPress={handleOpen}>
          <MaterialIcons name="settings" size={32} color={themeColors.lightGrey} />
          <RegularText size={14} styles={{ padding: 10 }}>
            Settings
          </RegularText>
        </MenuButton>
        <MenuButton onPress={() => navigation.navigate("About")}>
          <RegularText size={14} styles={{ padding: 10 }}>
            About
          </RegularText>
          <MaterialIcons name="help" size={32} color={themeColors.lightGrey} />
        </MenuButton>
      </MenuButtonContainer>
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
  margin: 0 20px;
`;

const UserInfoContainer = styled.View`
  align-items: center;
`;

const UserInfoButton = styled.Pressable`
  align-items: center;
  margin-top: -70px;
  width: 50%;
`;

const UserInfoText = styled.Text<{ themeColors: colorsModel }>`
  text-align: center;
  font-size: 16px;
  color: ${({ themeColors }) => themeColors.commons.white};
  background-color: ${({ themeColors }) => themeColors.backgrounds.lowOpacity};
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

const MenuButtonContainer = styled.View`
  bottom: 0px;
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0px;
`;
