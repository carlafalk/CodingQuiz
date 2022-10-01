import React from "react";
import styled from "styled-components/native";
import { useTheme } from "../contexts/ThemeContext";
import { colorsModel } from "../models/ColorsModel";
import BackButton from "./Buttons/BackButton";

interface Props {
  title: string;
  onPress?: () => void;
}

const TopSection = ({ title, onPress }: Props) => {
  const { themeColors } = useTheme();
  return (
    <Container>
      {onPress && <BackButton onPress={() => onPress()} />}
      <TitleConatiner themeColors={themeColors} noBackBtn={onPress ? false : true}>
        <TitleText>{title}</TitleText>
      </TitleConatiner>
    </Container>
  );
};

export default TopSection;

const Container = styled.View`
  height: 48px;
  flex-direction: row;
  align-items: center;
  margin: 60px 45px 20% 45px;
`;

const TitleConatiner = styled.View<{ noBackBtn: boolean; themeColors: colorsModel }>`
  width: ${(props) => (props.noBackBtn ? "100%" : "70%")};
  padding: 13px 0;
  background-color: ${({ themeColors }) => themeColors.darkPurple};
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  elevation: 8;
`;

const TitleText = styled.Text`
  font-family: "ShareTechMono";
  color: white;
  font-size: 20px;
  text-transform: uppercase;
`;
