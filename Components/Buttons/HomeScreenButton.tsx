import React from "react";
import styled from "styled-components/native";
import { useHaptics } from "../../contexts/HapticsContext";
import { useSound } from "../../contexts/SoundContext";
import { colors } from "../../Styles/Shared";

type Props = {
  title: string;
  color: string;
  onPress: () => void;
};

const HomeScreenButton = ({ onPress, title, color }: Props) => {
  const { playButtonEffect } = useSound();
  const { standardButtonHaptics } = useHaptics();
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
      <BtnTitle>{title}</BtnTitle>
    </Button>
  );
};

export default HomeScreenButton;

const Button = styled.Pressable<{ color: string }>`
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
