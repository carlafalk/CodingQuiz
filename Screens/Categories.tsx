import { Ionicons } from "@expo/vector-icons";
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
import CategoryButton from "../Components/Buttons/CategoryButton";
import { colors } from "../Styles/Shared";

type Props = NativeStackScreenProps<RootStackParams, "Categories">;

const CategoriesScreen = ({ navigation }: Props) => {
  return (
    <Background dark>
      <BackAndTitle>
        <Back activeOpacity={0.8} onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={45} color="white" />
        </Back>

        <Title>
          <TitleText>choose a category</TitleText>
        </Title>
      </BackAndTitle>
      <ButtonContainer>
        <CategoryButton title="react" color={colors.categories.react} img={ReactImg} />
        <CategoryButton title="html" color={colors.categories.html} img={HTMLImg} />
        <CategoryButton title="css" color={colors.categories.css} img={CSSImg} />
        <CategoryButton title="javascript" color={colors.categories.javaScript} img={JSImg} />
        <CategoryButton title="typescript" color={colors.categories.typeScript} img={TSImg} />
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

const Title = styled.View`
  width: 70%;
  padding: 13px 0;
  background-color: ${colors.darkPurple};
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  elevation: 8;
`;
const Back = styled.TouchableOpacity`
  width: 20%;
  background-color: ${colors.darkPurple};
  margin-right: auto;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  elevation: 8;
`;

const TitleText = styled.Text`
  font-family: "ShareTechMono";
  color: ${colors.commons.white};
  font-size: 20px;
  text-transform: uppercase;
`;
