import React from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";
import achievementData from "../../../data/achievementData";
import AchievementItem from "../../Achievements/AchievementItem";

const UserAchievements = () => {
  return (
    <ScrollView style={{ padding: 5 }}>
      <View>
        {achievementData.map((achievement) => (
          <AchievementItem key={achievement.title} achievement={achievement} />
        ))}
        <SmallDivider />
      </View>
    </ScrollView>
  );
};

export default UserAchievements;

const SmallDivider = styled.View`
  height: 10px;
`;
