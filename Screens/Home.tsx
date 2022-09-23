import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useRef } from "react";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";
import styled from "styled-components/native";
import { RootStackParams } from "../App";
import logo from "../assets/Images/logo.png";
import Background from "../Components/Background";
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
      <LogoContainer>
        <Logo source={logo} />
      </LogoContainer>
      <ButtonContainer>
        <PlayButton onPress={() => navigation.navigate("Categories")}>
          <BtnTitle>Play</BtnTitle>
        </PlayButton>
        <SettingsButton onPress={handleOpen}>
          <BtnTitle>Settings</BtnTitle>
        </SettingsButton>
        <AboutButton onPress={() => navigation.navigate("About")}>
          <BtnTitle>About</BtnTitle>
        </AboutButton>
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

const BtnTitle = styled.Text`
  font-family: ShareTechMono;
  text-transform: uppercase;
  color: ${colors.darkPurple};
  font-size: 20px;
`;

const LogoContainer = styled.View`
  height: 30%;
  align-items: center;
  justify-content: center;
  margin-top: 124px;
`;

const Logo = styled.Image`
  height: 80%;
  width: 80%;
  resize-mode: contain;
`;

const ButtonContainer = styled.View`
  margin-top: 48px;
`;

const PlayButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${colors.lightGreen};
  border-radius: 14px;
  margin: 0 100px;
  margin-bottom: 24px;
  elevation: 8;
  padding: 18px 0px;
`;

const SettingsButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${colors.mustard};
  border-radius: 14px;
  margin: 0 100px;
  margin-bottom: 24px;
  elevation: 8;
  shadowcolor: #171717;
  padding: 18px 0px;
`;

const AboutButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${colors.lightPurple};
  border-radius: 14px;
  margin-bottom: 24px;
  margin: 0 100px;
  elevation: 8;
  shadowcolor: #171717;
  padding: 18px 0px;
`;
