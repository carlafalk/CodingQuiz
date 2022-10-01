import { AntDesign } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import styled from "styled-components/native";
import { RootStackParams } from "../App";
import Background from "../Components/Background";
import Logo from "../Components/Logo";
import TopSection from "../Components/TopSection";
import { useTheme } from "../contexts/ThemeContext";
import { colorsModel } from "../models/ColorsModel";

type Props = NativeStackScreenProps<RootStackParams, "About">;

const AboutScreen = ({ navigation }: Props) => {
  const { themeColors } = useTheme();
  return (
    <Background dark>
      <TopSection title="about" onPress={() => navigation.goBack()} />
      <Logo topMargin={-50} size="medium" />
      <About themeColors={themeColors}>
        <HeaderContainer>
          <Header themeColors={themeColors}>About</Header>
          <AntDesign
            name="github"
            size={30}
            color="white"
            onPress={async () => await WebBrowser.openBrowserAsync("https://github.com/carlafalk/CodingQuiz")}
            style={{ position: "absolute", right: 0 }}
          />
        </HeaderContainer>
        <Description themeColors={themeColors}>School project for SUVNET21</Description>
        <Description style={{ marginBottom: 40 }} themeColors={themeColors}>
          Written in React Native
        </Description>
        <Creators themeColors={themeColors}>Made by</Creators>
        <Creators themeColors={themeColors}>Tommy</Creators>
        <Creators themeColors={themeColors}>Oscar</Creators>
        <Creators themeColors={themeColors}>Carl</Creators>
        <Creators themeColors={themeColors}>Alex</Creators>
      </About>
    </Background>
  );
};

export default AboutScreen;

const HeaderContainer = styled.View`
  width: 100%;
  justify-content: center;
  flex-direction: row;
`;

const About = styled.View<{ themeColors: colorsModel }>`
  background-color: ${({ themeColors }) => themeColors.lightPurple};
  margin: 0 21px;
  border-radius: 15px;
  padding: 25px;
  align-items: center;
  elevation: 8;
`;

const Header = styled.Text<{ themeColors: colorsModel }>`
  flex-direction: row;
  font-size: 30px;
  font-family: ShareTechMono;
  color: ${({ themeColors }) => themeColors.commons.white};
  margin-bottom: 60px;
  text-transform: uppercase;
`;

const Description = styled.Text<{ themeColors: colorsModel }>`
  font-size: 15px;
  font-family: ShareTechMono;
  color: ${({ themeColors }) => themeColors.commons.white};
`;

const Creators = styled.Text<{ themeColors: colorsModel }>`
  font-size: 20px;
  font-family: ShareTechMono;
  color: ${({ themeColors }) => themeColors.commons.white};
`;
