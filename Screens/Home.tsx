import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useRef } from "react";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";
import styled from "styled-components/native";
import { RootStackParams } from "../App";
import Background from "../Components/Background";
import HomeScreenButton from "../Components/Buttons/HomeScreenButton";
import Logo from "../Components/Logo";
import { colors } from "../Styles/Shared";
import SettingsScreen from "./Settings";

type HomeNavigationProps = NativeStackScreenProps<RootStackParams, "Home">;

const HomeScreen = ({ navigation }: HomeNavigationProps) => {
  const modalizeRef = useRef<Modalize>(null);

  const handleOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <Background>
      <Logo size="large" topMargin={124} />
      <ButtonContainer>
        <HomeScreenButton onPress={() => navigation.navigate("Categories")} title="Play" color={colors.lightGreen} />
        <HomeScreenButton onPress={handleOpen} title="Settings" color={colors.mustard} />
        <HomeScreenButton onPress={() => navigation.navigate("About")} title="About" color={colors.lightPurple} />
      </ButtonContainer>
      <Modalize ref={modalizeRef} rootStyle={modalRootStyle} modalStyle={modalModalStyle} modalTopOffset={150}>
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
  backgroundColor: "#2A242F",
  padding: 20,
  borderRadius: 20,
  flex: 1,
};

const ButtonContainer = styled.View`
  margin-top: 48px;
`;
