import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import styled from "styled-components/native";
import { RootStackParams } from "../App";
import CSSImg from "../assets/languageIcons/css-3.png";
import HTMLImg from "../assets/languageIcons/html-5.png";
import JSImg from "../assets/languageIcons/js.png";
import ReactImg from "../assets/languageIcons/react.png";
import TSImg from "../assets/languageIcons/typescript.png";
import CategoryButton from "../Components/Buttons/CategoryButton";
import Background from "../Components/Layout/Background";
import TopSection from "../Components/Layout/TopSection";
import { useTheme } from "../contexts/ThemeContext";

type Props = NativeStackScreenProps<RootStackParams, "Categories">;

const CategoriesScreen = ({ navigation }: Props) => {
  const { themeColors } = useTheme();
  return (
    <Background dark>
      <TopSection title="choose a category" onPress={() => navigation.goBack()} />
      <ButtonContainer>
        <CategoryButton
          title="react"
          color={themeColors.categories.react}
          img={ReactImg}
          onPress={() => navigation.navigate("Game", { category: "react" })}
        />
        <CategoryButton
          title="html"
          color={themeColors.categories.html}
          img={HTMLImg}
          onPress={() => navigation.navigate("Game", { category: "html" })}
        />
        <CategoryButton
          title="css"
          color={themeColors.categories.css}
          img={CSSImg}
          onPress={() => navigation.navigate("Game", { category: "css" })}
        />
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
  margin: 0 30px;
`;
