import React, { ReactNode } from "react";
import styled from "styled-components/native";
import bg from "../../assets/swirly4.png";
import bg2 from "../../assets/swirly5.png";
import { useTheme } from "../../contexts/ThemeContext";

interface Props {
  children: ReactNode;
  dark?: boolean;
}

const Background = ({ children, dark }: Props) => {
  const { isDarkTheme } = useTheme();
  return (
    <Bg source={isDarkTheme ? bg : bg2} resizeMode="cover" dark={dark}>
      {dark ? <DarkenBg>{children}</DarkenBg> : children}
    </Bg>
  );
};

export default Background;

const Bg = styled.ImageBackground`
  flex: 1;
`;

const DarkenBg = styled.View`
  flex: 1;
  background-color: #0000005d;
`;
