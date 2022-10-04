import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { useHaptics } from "../../contexts/HapticsContext";

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
      <Text>{title}</Text>
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
