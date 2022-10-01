import React, { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";

interface Props {
  children: ReactNode;
  styles?: StyleProp<ViewStyle>;
}

const ModalBackground = ({ children, styles }: Props) => {
  return <Background style={styles}>{children}</Background>;
};

const Background = styled.View`
  flex: 1;
  background-color: #00000090;
  justify-content: center;
`;

export default ModalBackground;
