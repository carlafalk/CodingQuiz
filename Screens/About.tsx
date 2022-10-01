import { AntDesign } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import styled from "styled-components/native";
import { RootStackParams } from "../App";
import Background from "../Components/Background";
import Logo from "../Components/Logo";
import STMText from "../Components/Texts/ShareTechMonoText";
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
          <Header size={30} uppercase>
            About
          </Header>
          <AntDesign
            name="github"
            size={30}
            color="white"
            onPress={async () => await WebBrowser.openBrowserAsync("https://github.com/carlafalk/CodingQuiz")}
            style={{ position: "absolute", right: 0 }}
          />
        </HeaderContainer>
        <Description size={15}>School project for SUVNET21</Description>
        <Description size={15} styles={{ marginBottom: 40 }}>
          Written in React Native
        </Description>
        <Creators size={20}>Made by</Creators>
        <Creators size={20}>Tommy</Creators>
        <Creators size={20}>Oscar</Creators>
        <Creators size={20}>Carl</Creators>
        <Creators size={20}>Alex</Creators>
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

const Header = styled(STMText)`
  flex-direction: row;
  margin-bottom: 60px;
`;

const Description = styled(STMText)``;

const Creators = styled(STMText)``;
