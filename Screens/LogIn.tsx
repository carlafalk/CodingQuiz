import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { KeyboardAvoidingView, Modal, Platform, View } from "react-native";
import styled from "styled-components/native";
import { RootStackParams } from "../App";
import Background from "../Components/Background";
import HomeScreenButton from "../Components/Buttons/HomeScreenButton";
import Logo from "../Components/Logo";
import { useSound } from "../contexts/SoundContext";
import { useTheme } from "../contexts/ThemeContext";
import { User } from "../models/User";
import CreateUserModal from "./CreateUserModal";
import UserExistModal from "./UserExistModal";

type Props = NativeStackScreenProps<RootStackParams, "LogIn">;

const LogInScreen = ({ navigation }: Props) => {
  const { isDarkTheme, toggleTheme, themeColors } = useTheme();
  const HomeScreenMusic = require("../assets/sounds/HomeScreenMusic.mp3");
  const { playSound, toggleMuteMusic, toggleMuteButtonSound } = useSound();
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [createUserModalVisible, setCreateUserModalVisible] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

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
            <CreateUserModal
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
            <UserExistModal
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
        </ButtonContainer>
      </Background>
    </KeyboardAvoidingView>
  );
};

export default LogInScreen;

const ButtonContainer = styled.View`
  margin-top: 48px;
`;
