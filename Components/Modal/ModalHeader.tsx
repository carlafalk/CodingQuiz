import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";
import { colorsModel } from "../../models/ColorsModel";
import STMText from "../Texts/ShareTechMonoText";

interface Props {
  title: string;
  closeModal: () => void;
  headerColor?: string;
  headerImg?: JSX.Element;
}

const ModalHeader = ({ title, closeModal, headerColor, headerImg }: Props) => {
  const { themeColors } = useTheme();

  return (
    <Header backgroundColor={headerColor} themeColors={themeColors}>
      {headerImg && headerImg}
      <STMText size={25} center styles={{ flex: 1 }} uppercase>
        {title}
      </STMText>
      <CloseButton onPress={closeModal}>
        <MaterialIcons name="close" size={32} color={themeColors.commons.white} />
      </CloseButton>
    </Header>
  );
};

const Header = styled.View<{ backgroundColor: string; themeColors: colorsModel }>`
  background-color: ${({ backgroundColor, themeColors }) => (backgroundColor ? backgroundColor : themeColors.darkPurple)};
  padding: 10px;
  align-items: center;
  flex-direction: row;
`;

const CloseButton = styled.TouchableOpacity``;

export default ModalHeader;
