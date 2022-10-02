import React from "react";
import styled from "styled-components/native";
import { useHaptics } from "../../contexts/HapticsContext";
import { useSound } from "../../contexts/SoundContext";
import { useTheme } from "../../contexts/ThemeContext";
import STMText from "../Texts/ShareTechMonoText";

type Props = {
  title: string;
  color: string;
  onPress: () => void;
};

const StandardButton = ({ onPress, title, color }: Props) => {
  const { playButtonEffect } = useSound();
  const { standardButtonHaptics } = useHaptics();
  const { themeColors } = useTheme();
  return (
    <Button
      android_disableSound={true}
      onPress={onPress}
      color={color}
      onPressIn={() => {
        playButtonEffect();
        standardButtonHaptics();
      }}
    >
      <BtnTitle styles={{ color: themeColors.darkPurple }} size={20} uppercase>
        {title}
      </BtnTitle>
    </Button>
  );
};

export default StandardButton;

const Button = styled.Pressable<{ color: string }>`
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  border-radius: 14px;
  margin: 0 80px;
  margin-bottom: 24px;
  elevation: 8;
  padding: 18px;
`;

const BtnTitle = styled(STMText)``;
