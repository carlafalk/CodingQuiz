import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useRef, useState } from "react";
import { KeyboardAvoidingView, Platform, Text } from "react-native";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";
import styled from "styled-components/native";
import { RootStackParams } from "../App";
import Background from "../Components/Background";
import StandardButton from "../Components/Buttons/StandardButton";
import Logo from "../Components/Logo";
import QuizModal from "../Components/Modal/QuizModal";
import CreateUser from "../Components/User/CreateUser";
import UserExists from "../Components/User/UserExists";
import { useTheme } from "../contexts/ThemeContext";
import { useUser } from "../contexts/UserContext";
import { defaultAvatar } from "../data/avatarData";
import { colorsModel } from "../models/ColorsModel";
import { User } from "../models/User";
import SettingsScreen from "./Settings";

type Props = NativeStackScreenProps<RootStackParams, "LogIn">;

const LogInScreen = ({ navigation }: Props) => {
  const { themeColors } = useTheme();
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [createUserModalVisible, setCreateUserModalVisible] = useState(false);

  const { createUser, loginUser, currentUser, users } = useUser();

  const randomGuestNumber = Math.floor(Math.random() * 9999);
  const guestUser = {
    username: "guest#" + randomGuestNumber,
    avatar: defaultAvatar,
  };

  useEffect(() => {
    currentUser ? navigation.navigate("Home") : navigation.navigate("LogIn");
  }, [currentUser]);

  const handleLogIn = (user: User) => {
    if (user) {
      loginUser(user);
      setLoginModalVisible(false);
    }
  };

  const handleCreateUser = () => {
    setCreateUserModalVisible(true);
  };

  const handlePlayAsGuest = () => {
    createUser(guestUser);
    loginUser(guestUser);
  };

  const modalizeRef = useRef<Modalize>(null);

  const handleOpen = () => {
    modalizeRef.current?.open();
  };

  const createUserHeaderImg = <FontAwesome5 name="user-plus" size={30} color={themeColors.commons.white} />;
  const logInHeaderImg = <MaterialCommunityIcons name="login" size={30} color={themeColors.commons.white} />;

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Background>
        <QuizModal
          show={createUserModalVisible}
          closeModal={() => setCreateUserModalVisible(false)}
          title={"create user"}
          headerImg={createUserHeaderImg}
        >
          <CreateUser handleClose={() => setCreateUserModalVisible(false)} />
        </QuizModal>

        <QuizModal
          show={loginModalVisible}
          closeModal={() => setLoginModalVisible(false)}
          title={"choose user"}
          modalHeight={"85%"}
          headerImg={logInHeaderImg}
        >
          <UserExists handleLogIn={handleLogIn} />
        </QuizModal>

        <Logo size="large" topMargin={120} />
        <ButtonContainer>
          {users.length > 0 && <StandardButton onPress={() => setLoginModalVisible(true)} title="Log in" color={themeColors.lightGreen} />}
          <StandardButton onPress={handleCreateUser} title="Create User" color={themeColors.mustard} />
          <Text style={{ textAlign: "center", color: themeColors.commons.white, paddingBottom: 20 }}>or</Text>
          <StandardButton onPress={handlePlayAsGuest} title="Play as guest" color={themeColors.categories.css} />
        </ButtonContainer>
        <MenuButton onPress={handleOpen}>
          <MaterialIcons name="settings" size={32} color={themeColors.lightGrey} />
          <MenuButtonText themeColors={themeColors}>Settings</MenuButtonText>
        </MenuButton>
      </Background>
      <Modalize
        ref={modalizeRef}
        rootStyle={modalRootStyle}
        modalStyle={{ backgroundColor: themeColors.deepPurple, ...modalModalStyle }}
        modalTopOffset={150}
      >
        <SettingsScreen />
      </Modalize>
    </KeyboardAvoidingView>
  );
};

export default gestureHandlerRootHOC(LogInScreen);

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

const ButtonContainer = styled.View`
  margin-top: 48px;
`;

const modalRootStyle = {
  backgroundColor: "rgba(0,0,0,0.5)",
};

const modalModalStyle = {
  padding: 20,
};
