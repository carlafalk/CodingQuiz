import React from "react";
import styled from "styled-components/native";
import { colors } from "../../Styles/Shared";

type Props = {
  title: string;
  color: string;
  onPress: () => void;
};

const HomeScreenButton = ({ onPress, title, color }: Props) => {
  return (
    <Button onPress={onPress} color={color}>
      <BtnTitle>{title}</BtnTitle>
    </Button>
  );
};

export default HomeScreenButton;

const Button = styled.TouchableOpacity<{ color: string }>`
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  border-radius: 14px;
  margin: 0 100px;
  margin-bottom: 24px;
  elevation: 8;
  padding: 18px 0px;
`;

const BtnTitle = styled.Text`
  font-family: ShareTechMono;
  text-transform: uppercase;
  color: ${colors.darkPurple};
  font-size: 20px;
`;
