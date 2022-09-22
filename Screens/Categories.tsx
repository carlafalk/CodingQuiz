import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import CSSImg from "../assets/languageIcons/css-3.png";
import HTMLImg from "../assets/languageIcons/html-5.png";
import JSImg from "../assets/languageIcons/js.png";
import ReactImg from "../assets/languageIcons/react.png";
import TSImg from "../assets/languageIcons/typescript.png";
import Background from "../Components/Background";
import { colors } from "../Styles/Shared";

const CategoriesScreen = () => {
  return (
    <Background>
      <StyledView>
        <BackAndTitle>
          <Back>
            <Ionicons name="ios-arrow-back" size={45} color="white" />
          </Back>
          <Title>
            <Text>CHOOSE A CATEGORY</Text>
          </Title>
        </BackAndTitle>
        <CardContainer>
          <ReactCard>
            <CardImage source={ReactImg} />
            <Text>REACT</Text>
          </ReactCard>
          <HTMLCard>
            <CardImage source={HTMLImg} />
            <Text>HTML</Text>
          </HTMLCard>
          <CSSCard>
            <CardImage source={CSSImg} />
            <Text>CSS</Text>
          </CSSCard>
          <JavaScriptCard>
            <CardImage source={JSImg} />
            <Text>JAVASCRIPT</Text>
          </JavaScriptCard>
          <TypeScriptCard>
            <CardImage source={TSImg} />
            <Text>TYPESCRIPT</Text>
          </TypeScriptCard>
        </CardContainer>
      </StyledView>
    </Background>
  );
};

export default CategoriesScreen;

const StyledView = styled.View`
  width: 80%;
  height: 90%;
`;

const CardContainer = styled.View`
  width: 100%;
  height: 80%;

  justify-content: space-between;
`;

const BackAndTitle = styled.View`
  height: 20%;
  width: 100%;

  flex-direction: row;
  align-items: center;
`;

const Title = styled.View`
  width: 70%;
  height: 40%;
  background-color: ${colors.darkPurple};
  justify-content: center;
  align-items: center;
  margin-top: 20%;
  border-radius: 15px;
  elevation: 8;
`;
const Back = styled.View`
  height: 40%;
  width: 20%;
  background-color: ${colors.darkPurple};
  margin-right: auto;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
  border-radius: 15px;
  elevation: 8;
`;
const ReactCard = styled.View`
  width: 100%;
  height: 18%;
  background-color: ${colors.categories.react};
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  elevation: 8;
`;
const HTMLCard = styled.View`
  width: 100%;
  height: 18%;
  background-color: ${colors.categories.html};
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  elevation: 8;
`;
const CSSCard = styled.View`
  width: 100%;
  height: 18%;
  background-color: ${colors.categories.css};
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  elevation: 8;
`;
const JavaScriptCard = styled.View`
  width: 100%;
  height: 18%;
  background-color: ${colors.categories.javaScript};
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  elevation: 8;
`;
const TypeScriptCard = styled.View`
  width: 100%;
  height: 18%;
  background-color: ${colors.categories.typeScript};
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  elevation: 8;
`;

const CardImage = styled.Image`
  height: 71px;
  width: 71px;
  margin: 0 25px;
  elevation: 8;
`;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   background: {
//     flex: 1,
//     justifyContent: "flex-start",
//     marginBottom: 250,
//     transform: [{ scale: 3 }],
//   },
//   reactCard: {
//     height: "60%",
//     width: "45%",
//     backgroundColor: `${colors.categories.react}`,
//     marginLeft: 106,
//     marginTop: 120,
//     zIndex: 14,
//   },
// });
