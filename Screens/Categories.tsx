import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import styled from "styled-components/native";
import { RootStackParams } from "../App";
import CSSImg from "../assets/languageIcons/css-3.png";
import HTMLImg from "../assets/languageIcons/html-5.png";
import JSImg from "../assets/languageIcons/js.png";
import ReactImg from "../assets/languageIcons/react.png";
import TSImg from "../assets/languageIcons/typescript.png";
import Background from "../Components/Background";
import BackButton from "../Components/Buttons/BackButton";
import CategoryButton from "../Components/Buttons/CategoryButton";
import { useTheme } from "../contexts/ThemeContext";

type Props = NativeStackScreenProps<RootStackParams, "Categories">;

const CategoriesScreen = ({ navigation }: Props) => {
  const { themeColors } = useTheme();
  return (
    <Background dark>
      <BackAndTitle>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />

        <Title bg={themeColors.darkPurple}>
          <TitleText color={themeColors.commons.white}>choose a category</TitleText>
        </Title>
      </BackAndTitle>
      <ButtonContainer>
        <CategoryButton
          title="react"
          color={themeColors.categories.react}
          img={ReactImg}
          onPress={() => navigation.navigate("Game", { category: "react" })}
        />
        <CategoryButton title="html" color={themeColors.categories.html} img={HTMLImg} onPress={() => navigation.navigate("Game", { category: "html" })} />
        <CategoryButton title="css" color={themeColors.categories.css} img={CSSImg} onPress={() => navigation.navigate("Game", { category: "css" })} />
        <CategoryButton
          title="javascript"
          color={themeColors.categories.javaScript}
          img={JSImg}
          onPress={() => navigation.navigate("Game", { category: "javascript" })}
        />
        <CategoryButton
          title="typescript"
          color={themeColors.categories.typeScript}
          img={TSImg}
          onPress={() => navigation.navigate("Game", { category: "typescript" })}
        />
      </ButtonContainer>
    </Background>
  );
};

export default CategoriesScreen;

const ButtonContainer = styled.View`
  margin: 0 45px;
`;

const BackAndTitle = styled.View`
  height: 48px;
  flex-direction: row;
  align-items: center;
  margin: 60px 45px 20% 45px;
`;

const Title = styled.View<{bg: string}>`
  width: 70%;
  padding: 13px 0;
  background-color: ${props => props.bg};
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  elevation: 8;
`;

const TitleText = styled.Text<{color: string}>`
  font-family: "ShareTechMono";
  color: ${props => props.color};
  font-size: 20px;
  text-transform: uppercase;
`;
