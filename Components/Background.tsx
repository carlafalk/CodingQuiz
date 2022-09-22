import React, { ReactNode } from "react";
import styled from "styled-components/native";
import bg from "../assets/swirly4.png";

interface Props {
  children: ReactNode;
  dark?: boolean;
}

const Background = ({ children, dark }: Props) => {
  return (
    <StyledBg source={bg} resizeMode="cover">
      {children}
    </StyledBg>
  );
};

export default Background;

const StyledBg = styled.ImageBackground`
  flex: 1;
`;

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
