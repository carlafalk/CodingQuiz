import React from "react";
import styled from "styled-components/native";
import logo from "../../assets/Images/logo.png";

interface Props {
  topMargin: number;
  size: "small" | "medium" | "large";
}

const Logo = ({ topMargin, size }: Props) => {
  return (
    <LogoContainer topMargin={topMargin} size={size}>
      <BigLogo source={logo} />
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.View<{ topMargin: number; size: string }>`
  margin-top: ${(props) => props.topMargin}px;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${(props) => props.size === "large" && "height: 30%;"}
  ${(props) => props.size === "medium" && "height: 20%;"}
  ${(props) => props.size === "small" && "height: 15%;"}
`;

const BigLogo = styled.Image`
  width: 80%;
  height: 80%;
  resize-mode: contain;
`;
