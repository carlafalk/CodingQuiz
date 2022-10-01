import { Ionicons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components/native";
import { useSound } from "../../contexts/SoundContext";
import { useTheme } from "../../contexts/ThemeContext";
import { colorsModel } from "../../models/ColorsModel";

interface Props {
  onPress: () => void;
}

const BackButton = ({ onPress }: Props) => {
  const { playButtonEffect } = useSound();
  const { themeColors } = useTheme();
  return (
    <Button themeColors={themeColors} android_disableSound={true} onPress={() => onPress()} onPressIn={() => playButtonEffect()}>
      <Ionicons name="ios-arrow-back" size={45} color="white" />
    </Button>
  );
};

const Button = styled.Pressable<{ themeColors: colorsModel }>`
  width: 20%;
  background-color: ${({ themeColors }) => themeColors.darkPurple};
  margin-right: auto;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  elevation: 8;
`;

export default BackButton;
