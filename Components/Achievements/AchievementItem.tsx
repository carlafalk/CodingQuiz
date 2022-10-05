import React from "react";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";
import { AchievementModel } from "../../models/AchievementModel";
import { colorsModel } from "../../models/ColorsModel";
import STMText from "../Texts/ShareTechMonoText";

interface Props {
  achievement: AchievementModel;
}

const AchievementItem = ({ achievement }: Props) => {
  const { themeColors } = useTheme();
  return (
    <AchievementCard achievement={achievement}>
      <AchievementImage source={achievement.imageURL} />
      <AchievementInfo themeColors={themeColors} achievement={achievement}>
        <STMText size={20} styles={{ padding: 4 }}>
          {achievement.title}
        </STMText>
        <STMText size={14} styles={{ padding: 4 }}>
          {achievement.desc}
        </STMText>
        {achievement.currentProgress !== undefined && (
          <STMText size={14} styles={{ padding: 4 }}>
            Current progress: {achievement.currentProgress} / {achievement.destination}
          </STMText>
        )}
      </AchievementInfo>
    </AchievementCard>
  );
};

export default AchievementItem;

const AchievementCard = styled.View<{ achievement: AchievementModel }>`
  align-items: center;
  margin-bottom: 15px;
  flex-direction: row;
  opacity: ${({ achievement }) => (achievement.isCompleted ? 1 : 0.3)};
`;

const AchievementImage = styled.Image`
  width: 80px;
  height: 80px;
  resize-mode: cover;
`;

const AchievementInfo = styled.View<{ achievement: AchievementModel; themeColors: colorsModel }>`
  flex: 1;
  margin: 10px;
  background-color: ${({ themeColors, achievement }) => (achievement.isCompleted ? themeColors.success : themeColors.lightGrey)};
  border-radius: 10px;
  padding: 10px;
  height: 100%;
`;

/* background-color: ${(achievement, themeColor) => (achievement.isCompleted ? themeColor.success : themeColor.lightGrey)}; */
