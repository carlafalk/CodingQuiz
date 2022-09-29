import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";
import CSSImg from "../assets/languageIcons/css-3.png";
import HTMLImg from "../assets/languageIcons/html-5.png";
import JSImg from "../assets/languageIcons/js.png";
import ReactImg from "../assets/languageIcons/react.png";
import TSImg from "../assets/languageIcons/typescript.png";
import { useTheme } from "../contexts/ThemeContext";
import { AnswerInfo } from "../models/AnswerInfo";
import { colorsModel } from "../models/ColorsModel";
import AnswerCard from "./AnswerCard";
import STMText from "./Texts/ShareTechMonoText";

interface Props {
  gameSession: AnswerInfo[];
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  category: string;
}

const GameSession = ({ gameSession, closeModal, category }: Props) => {
  const { themeColors } = useTheme();

  let categoryImg = "";
  let categoryColor: string = "";

  if (category === "html") {
    categoryImg = HTMLImg;
    categoryColor = themeColors.categories.html;
  } else if (category === "css") {
    categoryImg = CSSImg;
    categoryColor = themeColors.categories.css;
  } else if (category === "react") {
    categoryImg = ReactImg;
    categoryColor = themeColors.categories.react;
  } else if (category === "javascript") {
    categoryImg = JSImg;
    categoryColor = themeColors.categories.javaScript;
  } else if (category === "typescript") {
    categoryImg = TSImg;
    categoryColor = themeColors.categories.typeScript;
  }

  const answerCards = gameSession.map((info, index) => (
    <AnswerCard key={index} answerInfo={info} questionNr={index + 1} categoryColor={categoryColor} />
  ));
  return (
    <ModalBackground>
      <ModalContainer themeColors={themeColors}>
        <ModalHeader categoryColor={categoryColor}>
          <CategoryImage source={categoryImg} />
          <STMText size={25} center>
            Game Statistics
          </STMText>
          <CloseButton onPress={() => closeModal(false)}>
            <MaterialIcons name="close" size={32} color={themeColors.commons.white} />
          </CloseButton>
        </ModalHeader>

        <View style={{ padding: 20 }}>
          <ScrollView horizontal={true} decelerationRate={0} snapToInterval={320} snapToAlignment={"center"}>
            {answerCards}
          </ScrollView>
        </View>
      </ModalContainer>
    </ModalBackground>
  );
};

const ModalBackground = styled.View`
  flex: 1;
  background-color: #00000075;
  justify-content: center;
`;

const ModalContainer = styled.View<{ themeColors: colorsModel }>`
  margin: 0 10px;
  background-color: ${({ themeColors }) => themeColors.deepPurple};
  border-radius: 15px;
  overflow: hidden;
`;

const ModalHeader = styled.View<{ categoryColor: string }>`
  background-color: ${({ categoryColor }) => categoryColor};
  padding: 10px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const CloseButton = styled.TouchableOpacity`
  /* position: absolute;
  top: 5px;
  right: 20px; */
`;

const CategoryImage = styled.Image`
  height: 40px;
  width: 40px;
`;

export default GameSession;
