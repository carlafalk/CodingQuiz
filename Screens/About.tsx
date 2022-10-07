import { AntDesign } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import { BigHead } from "react-native-bigheads";
import styled from "styled-components/native";
import { RootStackParams } from "../App";
import Background from "../Components/Layout/Background";
import Logo from "../Components/Layout/Logo";
import TopSection from "../Components/Layout/TopSection";
import STMText from "../Components/Texts/ShareTechMonoText";
import { useTheme } from "../contexts/ThemeContext";
import { colorsModel } from "../models/ColorsModel";
import { Divider } from "../Styles/views";

type Props = NativeStackScreenProps<RootStackParams, "About">;

const AboutScreen = ({ navigation }: Props) => {
  const { themeColors } = useTheme();
  return (
    <Background dark>
      <AntDesign
        name="github"
        size={40}
        color="white"
        onPress={async () => await WebBrowser.openBrowserAsync("https://github.com/carlafalk/CodingQuiz")}
        style={{ position: "absolute", right: 20, bottom: 20 }}
      />
      <TopSection title="about" onPress={() => navigation.goBack()} />
      <Logo topMargin={-50} size="medium" />
      <About themeColors={themeColors}>
        <HeaderContainer>
          <Header size={30} uppercase styles={{ marginBottom: 10 }}>
            coding quiz
          </Header>
          <Divider style={{ width: "100%", borderColor: themeColors.commons.white }} />
        </HeaderContainer>
        <Description size={15} styles={{ marginVertical: 10 }}>
          School assignment creating our first mobile application using React Native
        </Description>
        <Divider style={{ width: "100%", borderColor: themeColors.commons.white }} />

        <Contributors size={25} styles={{ marginVertical: 10 }}>
          Contributors
        </Contributors>
        <ContributorContainer>
          <Contributor>
            <BigHead size={50} onPress={async () => await WebBrowser.openBrowserAsync("https://github.com/ThaDDDen")} />
            <Contributors size={20}>ThaDDDen</Contributors>
          </Contributor>
          <Contributor onPress={async () => await WebBrowser.openBrowserAsync("https://github.com/osci-the-orca")}>
            <BigHead size={50} />
            <Contributors size={20}>osci-the-orca</Contributors>
          </Contributor>
          <Contributor onPress={async () => await WebBrowser.openBrowserAsync("https://github.com/carlafalk")}>
            <BigHead size={50} />
            <Contributors size={20}>carlafalk</Contributors>
          </Contributor>
          <Contributor onPress={async () => await WebBrowser.openBrowserAsync("https://github.com/4l3x91")}>
            <BigHead size={50} />
            <Contributors size={20}>4l3x91</Contributors>
          </Contributor>
        </ContributorContainer>
      </About>
    </Background>
  );
};

export default AboutScreen;

const HeaderContainer = styled.View`
  width: 100%;
  align-items: center;
`;

const About = styled.View<{ themeColors: colorsModel }>`
  background-color: ${({ themeColors }) => themeColors.deepPurple};
  margin: -25px 21px 0px 21px;
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

const Contributors = styled(STMText)``;

const Contributor = styled.Pressable`
  flex-direction: row;
  align-items: flex-end;
`;

const ContributorContainer = styled.View``;
