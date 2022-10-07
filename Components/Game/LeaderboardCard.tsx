import React, { useEffect } from "react";
import { BigHead } from "react-native-bigheads";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";
import { useUser } from "../../contexts/UserContext";
import { colorsModel } from "../../models/ColorsModel";
import { GameSessionModel } from "../../models/GameSessionModel";
import STMText from "../Texts/ShareTechMonoText";

const LeaderboardCard = () => {
  const { users } = useUser();
  const { themeColors } = useTheme();

  useEffect(() => {
    getAllGameSessions();
  }, []);

  const getAllGameSessions = () => {
    let allGameSessions: GameSessionModel[] = [];
    users.forEach((user) => {
      allGameSessions.push(...user.gameSessions);
    });
    return allGameSessions;
  };

  const sortGameSessios = () => {
    const sortedGameSessions = getAllGameSessions()
      .sort((a, b) => a.gameTime - b.gameTime)
      .sort((a, b) => b.points - a.points);
    return sortedGameSessions;
  };

  const findCorrespondingUser = (item: GameSessionModel) => {
    return users.find((user) => user.id === item.userId);
  };

  return (
    <Container themeColors={themeColors}>
      <HeaderBox>
        <STMText size={10}> points</STMText>
        <STMText size={10}> time</STMText>
      </HeaderBox>
      {sortGameSessios().map((item, index) => (
        <LeaderboardItem key={index} themeColors={themeColors}>
          <STMText styles={{ alignSelf: "center" }} size={24}>
            {index + 1}
          </STMText>
          <UserInfo>
            <BigHead {...findCorrespondingUser(item)?.avatar} size={60} />
            <STMText size={24}>{findCorrespondingUser(item)?.username}</STMText>
          </UserInfo>
          <GameInfo>
            <STMText size={24}>{item.points}</STMText>
            <STMText size={15}>{item.gameTime.toFixed(1)}s</STMText>
          </GameInfo>
        </LeaderboardItem>
      ))}
    </Container>
  );
};

export default LeaderboardCard;

const Container = styled.ScrollView<{ themeColors: colorsModel }>`
  background-color: ${({ themeColors }) => themeColors.darkPurple};
  flex: 1;
  margin: -50px 30px 30px 30px;
  border-radius: 10px;
`;

const HeaderBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80px;
  margin-left: auto;
  margin-right: 35px;
  margin-top: 10px;
`;

const LeaderboardItem = styled.View<{ themeColors: colorsModel }>`
  flex: 1;
  background-color: ${({ themeColors }) => themeColors.lightPurple};
  justify-content: space-between;
  flex-direction: row;
  border-radius: 10px;
  margin: 5px 10px;
`;
const UserInfo = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const GameInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80px;
  margin-right: 10px;
`;
