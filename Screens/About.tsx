import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import styled from "styled-components/native";
import { RootStackParams } from "../App";
import Background from "../Components/Background";
import Logo from "../Components/Logo";
import TopSection from "../Components/TopSection";
import { colors } from "../Styles/Shared";

type Props = NativeStackScreenProps<RootStackParams, "About">;

const AboutScreen = ({ navigation }: Props) => {
  return (
    <Background dark>
      <TopSection title="about" onPress={() => navigation.goBack()} />
      <Logo topMargin={-50} size="medium" />
      <About>
        <Header>About</Header>
        <Description>School project for SUVNET21</Description>
        <Description style={{ marginBottom: 40 }}>Written in React Native</Description>
        <Creators>Made by</Creators>
        <Creators>Tommy</Creators>
        <Creators>Oscar</Creators>
        <Creators>Carl</Creators>
        <Creators>Alex</Creators>
      </About>
    </Background>
  );
};

export default AboutScreen;

const About = styled.View`
  background-color: ${colors.lightPurple};
  margin: 0 21px;
  border-radius: 15px;
  padding: 25px;
  align-items: center;
  elevation: 8;
`;

const Header = styled.Text`
  font-size: 30px;
  font-family: ShareTechMono;
  color: ${colors.commons.white};
  margin-bottom: 60px;
  text-transform: uppercase;
`;

const Description = styled.Text`
  font-size: 15px;
  font-family: ShareTechMono;
  color: ${colors.commons.white};
`;

const Creators = styled.Text`
  font-size: 20px;
  font-family: ShareTechMono;
  color: ${colors.commons.white};
`;
