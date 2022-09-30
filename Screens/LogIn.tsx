import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { KeyboardAvoidingView, Modal, Platform, Text, View } from "react-native";
import styled from "styled-components/native";
import { RootStackParams } from "../App";
import Background from "../Components/Background";
import HomeScreenButton from "../Components/Buttons/HomeScreenButton";
import Logo from "../Components/Logo";
import CreateUser from "../Components/User/CreateUser";
import UserExists from "../Components/User/UserExists";
import { useTheme } from "../contexts/ThemeContext";
import { useUser } from "../contexts/UserContext";
import { defaultAvatar } from "../data/avatarData";
import { User } from "../models/User";

type Props = NativeStackScreenProps<RootStackParams, "LogIn">;

const LogInScreen = ({ navigation }: Props) => {
  const { isDarkTheme, toggleTheme, themeColors } = useTheme();
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [createUserModalVisible, setCreateUserModalVisible] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { createUser } = useUser();
  const randomGuestNumber = Math.floor(Math.random() * 9999);
  const guestUser = {
    username: "guest#" + randomGuestNumber,
    avatar: defaultAvatar,
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Background>
        <View>
          <Modal
            statusBarTranslucent={true}
            animationType="fade"
            transparent={true}
            visible={createUserModalVisible}
            onRequestClose={() => {
              setCreateUserModalVisible(!createUserModalVisible);
            }}
          >
            <CreateUser
              handleClose={() => {
                setCreateUserModalVisible(false);
              }}
            />
          </Modal>
          <Modal
            statusBarTranslucent={true}
            animationType="fade"
            transparent={true}
            visible={loginModalVisible}
            onRequestClose={() => {
              setLoginModalVisible(!loginModalVisible);
            }}
          >
            <UserExists
              handleClose={() => {
                setLoginModalVisible(false);
              }}
              handleLogIn={(user: User) => {
                setLoggedIn(true);
                setLoginModalVisible(false);
                navigation.navigate("Home", { loggedIn: true, user: user });
              }}
            />
          </Modal>
        </View>
        <Logo size="large" topMargin={120} />
        <ButtonContainer>
          <HomeScreenButton onPress={() => setLoginModalVisible(true)} title="Log in" color={themeColors.lightGreen} />
          <HomeScreenButton onPress={() => setCreateUserModalVisible(true)} title="Create User" color={themeColors.mustard} />
          <Text style={{ textAlign: "center", color: themeColors.commons.white, paddingBottom: 20 }}>or</Text>
          <HomeScreenButton
            onPress={() => {
              createUser(guestUser);
              navigation.navigate("Home", { loggedIn: true, user: guestUser });
            }}
            title="Play as guest"
            color={themeColors.categories.css}
          />
        </ButtonContainer>
      </Background>
    </KeyboardAvoidingView>
  );
};

export default LogInScreen;

const ButtonContainer = styled.View`
  margin-top: 48px;
`;
