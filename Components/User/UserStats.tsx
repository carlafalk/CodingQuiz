import React from "react";
import { Image, ScrollView } from "react-native";
import styled from "styled-components/native";
import CSSImg from "../../assets/languageIcons/css-3.png";
import HTMLImg from "../../assets/languageIcons/html-5.png";
import JSImg from "../../assets/languageIcons/js.png";
import ReactImg from "../../assets/languageIcons/react.png";
import TSImg from "../../assets/languageIcons/typescript.png";
import { useTheme } from "../../contexts/ThemeContext";
import { useUser } from "../../contexts/UserContext";
import STMText from "../Texts/ShareTechMonoText";
import CategoryStats from "./CategoryStats";

const UserStats = () => {
  const { themeColors } = useTheme();
  const { currentUser, mostPlayedCategory, totalPoints } = useUser();

  function getFavoriteImg(category: string) {
    if (category === "react") return ReactImg;
    if (category === "html") return CSSImg;
    if (category === "css") return HTMLImg;
    if (category === "javascript") return JSImg;
    if (category === "typescript") return TSImg;
  }
  return (
    <Container>
      <OuterStatsContainer>
        <StatsHeader backgroundColor={themeColors.lightGreen}>
          <STMText size={16} center uppercase>
            all-time
          </STMText>
        </StatsHeader>
        <InnerStatsContainer backgroundColor={themeColors.darkPurple}>
          <StatRow>
            <STMText size={11} uppercase>
              Games played
            </STMText>
            <STMText size={11}>{currentUser?.gameSessions.length}</STMText>
          </StatRow>
          <StatRow>
            <STMText size={11} uppercase>
              Correct answers
            </STMText>
            <STMText size={11}>
              {totalPoints()}/{currentUser && currentUser.gameSessions.length * 10}
            </STMText>
          </StatRow>
          <StatRow>
            <STMText size={11} uppercase>
              Rights / Quiz
            </STMText>
            <STMText size={11}>{currentUser && totalPoints() > 0 && (totalPoints() / currentUser.gameSessions.length).toFixed(2)}</STMText>
          </StatRow>
          <StatRow>
            <STMText size={11} uppercase>
              Favorite category
            </STMText>
            <Image source={getFavoriteImg(mostPlayedCategory())} style={{ width: 15, height: 15, marginTop: -2 }}></Image>
          </StatRow>
        </InnerStatsContainer>
      </OuterStatsContainer>
      <OuterStatsContainer>
        <StatsHeader backgroundColor={themeColors.categories.javaScript}>
          <STMText size={16} center uppercase>
            Categories
          </STMText>
        </StatsHeader>
        <InnerStatsContainer backgroundColor={themeColors.darkPurple}>
          <ScrollView decelerationRate={0} snapToAlignment={"center"}>
            <CategoryStats category="react" />
            <CategoryStats category="html" />
            <CategoryStats category="css" />
            <CategoryStats category="javascript" />
            <CategoryStats category="typescript" />
          </ScrollView>
        </InnerStatsContainer>
      </OuterStatsContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  margin: 4px;
`;

const StatsHeader = styled.View<{ backgroundColor: string }>`
  padding: 6px 24px;
  border-radius: 5px;
  margin-bottom: 6px;
  elevation: 8;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const StatRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 4px;
`;

const OuterStatsContainer = styled.View`
  flex: 1;
  padding: 10px;
`;

const InnerStatsContainer = styled.View<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 8px;
  height: 200px;
  elevation: 8;
`;

export default UserStats;
