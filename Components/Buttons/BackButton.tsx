import { Ionicons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components/native";
import { useSound } from "../../contexts/SoundContext";
import { colors } from "../../Styles/Shared";

interface Props {
  onPress: () => void;
}

const BackButton = ({ onPress }: Props) => {
  const { playButtonEffect } = useSound();
  return (
    <Button android_disableSound={true} onPress={() => onPress()} onPressIn={() => playButtonEffect()}>
      <Ionicons name="ios-arrow-back" size={45} color="white" />
    </Button>
  );
};

const Button = styled.Pressable`
  width: 20%;
  background-color: ${colors.darkPurple};
  margin-right: auto;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  elevation: 8;
`;

export default BackButton;
