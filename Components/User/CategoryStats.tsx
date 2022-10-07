import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import CSSImg from "../../assets/languageIcons/css-3.png";
import HTMLImg from "../../assets/languageIcons/html-5.png";
import JSImg from "../../assets/languageIcons/js.png";
import ReactImg from "../../assets/languageIcons/react.png";
import TSImg from "../../assets/languageIcons/typescript.png";
import { useTheme } from "../../contexts/ThemeContext";
import { useUser } from "../../contexts/UserContext";
import STMText from "../Texts/ShareTechMonoText";

interface Props {
  category: "react" | "html" | "css" | "javascript" | "typescript";
}

const CategoryStats = ({ category }: Props) => {
  const [categoryImg, setCategoryImg] = useState();
  const [categoryColor, setCategoryColor] = useState("");
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const { currentUser } = useUser();

  const { themeColors } = useTheme();

  useEffect(() => {
    if (currentUser) {
      setGamesPlayed(currentUser.gameSessions.filter((gameSession) => gameSession.category === category).length);
      setCorrectAnswers(
        currentUser.gameSessions.filter((gameSession) => gameSession.category === category).reduce((acc, cur) => acc + cur.points, 0)
      );
    }
  }, []);

  useEffect(() => {
    if (category === "html") {
      setCategoryImg(HTMLImg);
      setCategoryColor(themeColors.categories.html);
    } else if (category === "css") {
      setCategoryImg(CSSImg);
      setCategoryColor(themeColors.categories.css);
    } else if (category === "react") {
      setCategoryImg(ReactImg);
      setCategoryColor(themeColors.categories.react);
    } else if (category === "javascript") {
      setCategoryImg(JSImg);
      setCategoryColor(themeColors.categories.javaScript);
    } else if (category === "typescript") {
      setCategoryImg(TSImg);
      setCategoryColor(themeColors.categories.typeScript);
    }
  }, []);

  return (
    <OuterContainer>
      <HeaderImg source={categoryImg as any} />
      <InnerContainer backgroundColor={categoryColor}>
        <StatsContainer>
          <StatRow>
            <STMText size={11} uppercase>
              Games played
            </STMText>
            <STMText size={11}>{gamesPlayed}</STMText>
          </StatRow>
          <StatRow>
            <STMText size={11} uppercase>
              Correct answers
            </STMText>
            <STMText size={11}>{correctAnswers}</STMText>
          </StatRow>
          <StatRow>
            <STMText size={11} uppercase>
              Rights / Quiz
            </STMText>
            <STMText size={11}>{gamesPlayed > 0 && Number(((gamesPlayed / correctAnswers) * 10).toFixed(2))}</STMText>
          </StatRow>
        </StatsContainer>
      </InnerContainer>
    </OuterContainer>
  );
};

const OuterContainer = styled.View`
  padding: 5px;
`;

const InnerContainer = styled.View<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 6px;
  padding: 5px;
`;

const StatsContainer = styled.View`
  margin-top: 20px;
`;

const StatRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderImg = styled.Image`
  width: 35px;
  height: 35px;
  align-self: center;
  z-index: 1;
  margin-bottom: -20px;
`;

export default CategoryStats;
