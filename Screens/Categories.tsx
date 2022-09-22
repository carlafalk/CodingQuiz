import { Ionicons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components/native";
import CSSImg from "../assets/languageIcons/css-3.png";
import HTMLImg from "../assets/languageIcons/html-5.png";
import JSImg from "../assets/languageIcons/js.png";
import ReactImg from "../assets/languageIcons/react.png";
import TSImg from "../assets/languageIcons/typescript.png";
import Background from "../Components/Background";
import { colors } from "../Styles/Shared";

// type Props = NativeStackScreenProps<RootStackParams, "Categories">;
// onPress={navigation.navigate("Home")}
// { navigation }: Props

const CategoriesScreen = () => {
  return (
    <Background>
      <Container>
        <StyledView>
          <BackAndTitle>
            <Back activeOpacity={0.8}>
              <Ionicons name="ios-arrow-back" size={45} color="white" />
            </Back>

            <Title>
              <TitleText>CHOOSE A CATEGORY</TitleText>
            </Title>
          </BackAndTitle>
          <CardContainer>
            <ReactCard activeOpacity={0.8}>
              <CardImage source={ReactImg} />
              <StyledText>REACT</StyledText>
            </ReactCard>

            <HTMLCard activeOpacity={0.8}>
              <CardImage source={HTMLImg} />
              <StyledText>HTML</StyledText>
            </HTMLCard>

            <CSSCard activeOpacity={0.8}>
              <CardImage source={CSSImg} />
              <StyledText>CSS</StyledText>
            </CSSCard>

            <JavaScriptCard activeOpacity={0.8}>
              <CardImage source={JSImg} />
              <StyledText>JAVASCRIPT</StyledText>
            </JavaScriptCard>

            <TypeScriptCard activeOpacity={0.8}>
              <CardImage source={TSImg} />
              <StyledText>TYPESCRIPT</StyledText>
            </TypeScriptCard>
          </CardContainer>
        </StyledView>
      </Container>
    </Background>
  );
};

export default CategoriesScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledView = styled.View`
  width: 80%;
  height: 90%;
`;

const CardContainer = styled.View`
  height: 80%;

  justify-content: space-between;
`;

const BackAndTitle = styled.View`
  height: 20%;

  flex-direction: row;
  align-items: center;
`;

const Title = styled.View`
  width: 70%;
  height: 40%;
  background-color: ${colors.darkPurple};
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  border-radius: 15px;
  elevation: 8;
`;
const Back = styled.TouchableOpacity`
  height: 40%;
  width: 20%;
  background-color: ${colors.darkPurple};
  margin-right: auto;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  border-radius: 15px;
  elevation: 8;
`;
const ReactCard = styled.TouchableOpacity`
  height: 18%;
  background-color: ${colors.categories.react};
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  elevation: 8;
`;
const HTMLCard = styled.TouchableOpacity`
  height: 18%;
  background-color: ${colors.categories.html};
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  elevation: 8;
`;
const CSSCard = styled.TouchableOpacity`
  height: 18%;
  background-color: ${colors.categories.css};
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  elevation: 8;
`;
const JavaScriptCard = styled.TouchableOpacity`
  height: 18%;
  background-color: ${colors.categories.javaScript};
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  elevation: 8;
`;
const TypeScriptCard = styled.TouchableOpacity`
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
  elevation: 2;
  shadowcolor: black;
`;

const StyledText = styled.Text`
  font-family: "ShareTechMono";
  color: white;
  font-size: 30px;
`;
const TitleText = styled.Text`
  font-family: "ShareTechMono";
  color: white;
  font-size: 20px;
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
