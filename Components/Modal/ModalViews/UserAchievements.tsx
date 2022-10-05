import React from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";
import { useUser } from "../../../contexts/UserContext";
import AchievementItem from "../../Achievements/AchievementItem";

const UserAchievements = () => {
  const { currentUser } = useUser();

  return (
    <ScrollView style={{ padding: 5 }}>
      <View>
        {currentUser?.achievements.map((achievement) => (
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
