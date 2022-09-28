import React, { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";
import { colorsModel } from "../../models/ColorsModel";

export interface Props {
  styles?: StyleProp<TextStyle>;
  children: ReactNode;
  uppercase?: boolean;
  center?: boolean;
  size: number;
}

const STMText = ({ styles, children, uppercase, center, size }: Props) => {
  const { themeColors } = useTheme();
  return (
    <StyledText themeColors={themeColors} style={styles} uppercase={uppercase} center={center} size={size}>
      {children}
    </StyledText>
  );
};

export default STMText;

const StyledText = styled.Text<{ themeColors: colorsModel; uppercase?: boolean; center?: boolean; size: number }>`
  font-family: ShareTechMono;
  color: ${({ themeColors }) => themeColors.commons.white};
  font-size: ${({ size }) => size}px;
  ${({ uppercase }) => uppercase && "text-transform: uppercase"}
  ${({ center }) => center && "text-align: center"}
`;
