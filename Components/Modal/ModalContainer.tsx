import React, { ReactNode } from "react";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";
import { colorsModel } from "../../models/ColorsModel";

import ModalHeader from "./ModalHeader";

interface Props {
  height?: string;
  children: ReactNode;
  closeModal: () => void;
  title: string;
  headerColor?: string;
  headerImg?: JSX.Element;
}

const ModalContainer = ({ height, children, closeModal, title, headerColor, headerImg }: Props) => {
  const { themeColors } = useTheme();
  return (
    <Container themeColors={themeColors} height={height}>
      <ModalHeader title={title} closeModal={closeModal} headerColor={headerColor} headerImg={headerImg} />
      {children}
    </Container>
  );
};

const Container = styled.View<{ height?: string; themeColors: colorsModel }>`
  margin: 0 10px;
  background-color: ${({ themeColors }) => themeColors.deepPurple};
  border-radius: 10px;
  overflow: hidden;
  ${({ height }) => height && `height: ${height};`}
`;

export default ModalContainer;
