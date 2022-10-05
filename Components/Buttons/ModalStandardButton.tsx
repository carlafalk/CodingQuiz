import React from "react";
import styled from "styled-components/native";
import { useHaptics } from "../../contexts/HapticsContext";
import STMText from "../Texts/ShareTechMonoText";

interface Props {
  title: string;
  color: string;
  onPress: () => void;
}

const ModalStandardButton = ({ title, color, onPress }: Props) => {
  const { hapticsSuccess } = useHaptics();

  return (
    <Button
      color={color}
      onPress={() => {
        onPress();
        hapticsSuccess();
      }}
    >
      <STMText size={15} styles={{ paddingVertical: 4 }} uppercase>
        {title}
      </STMText>
    </Button>
  );
};

const Button = styled.Pressable<{ color: string }>`
  background-color: ${(props) => props.color};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 4px 12px;
  margin: 8px;
  elevation: 8;
`;

export default ModalStandardButton;
