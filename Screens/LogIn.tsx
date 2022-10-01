import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, Text } from "react-native";
import styled from "styled-components/native";
import { RootStackParams } from "../App";
import Background from "../Components/Background";
import HomeScreenButton from "../Components/Buttons/HomeScreenButton";
import Logo from "../Components/Logo";
import QuizModal from "../Components/QuizModal";
import CreateUser from "../Components/User/CreateUser";
import UserExists from "../Components/User/UserExists";
import { useTheme } from "../contexts/ThemeContext";
import { useUser } from "../contexts/UserContext";
import { defaultAvatar } from "../data/avatarData";
import { User } from "../models/User";

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

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Background>
        <QuizModal show={createUserModalVisible} closeModal={() => setCreateUserModalVisible(false)} title={"create user"}>
          <CreateUser handleClose={() => setCreateUserModalVisible(false)} />
        </QuizModal>

        <QuizModal show={loginModalVisible} closeModal={() => setLoginModalVisible(false)} title={"choose user"} modalHeight={"85%"}>
          <UserExists handleLogIn={handleLogIn} />
        </QuizModal>

        <Logo size="large" topMargin={120} />
        <ButtonContainer>
          {users.length > 0 && <HomeScreenButton onPress={() => setLoginModalVisible(true)} title="Log in" color={themeColors.lightGreen} />}
          <HomeScreenButton onPress={handleCreateUser} title="Create User" color={themeColors.mustard} />
          <Text style={{ textAlign: "center", color: themeColors.commons.white, paddingBottom: 20 }}>or</Text>
          <HomeScreenButton onPress={handlePlayAsGuest} title="Play as guest" color={themeColors.categories.css} />
        </ButtonContainer>
      </Background>
    </KeyboardAvoidingView>
  );
};

export default LogInScreen;

const ButtonContainer = styled.View`
  margin-top: 48px;
`;
