import React, { ReactNode } from "react";
import styled from "styled-components/native";
import bg from "../assets/swirly4.png";

interface Props {
  children: ReactNode;
  dark?: boolean;
}

const Background = ({ children, dark }: Props) => {
  return (
    <Bg source={bg} resizeMode="cover" dark={dark}>
      {dark ? <DarkenBg>{children}</DarkenBg> : children}
    </Bg>
  );
};

export default Background;

const Bg = styled.ImageBackground<{ dark: boolean }>`
  flex: 1;
`;

const DarkenBg = styled.View`
  flex: 1;
  background-color: #0000005d;
`;
