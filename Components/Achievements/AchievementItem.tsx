import React from "react";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";
import { useUser } from "../../contexts/UserContext";
import { AchievementModel } from "../../models/AchievementModel";
import { colorsModel } from "../../models/ColorsModel";
import STMText from "../Texts/ShareTechMonoText";

interface Props {
  achievement: AchievementModel;
}

const AchievementItem = ({ achievement }: Props) => {
  const { themeColors } = useTheme();
  const { currentUser } = useUser();
  const exists = () => {
    if (currentUser?.achievements.find((x) => x.title === achievement.title)) return true;
    else return false;
  };
  return (
    <>
      <AchievementCard achievement={achievement}>
        <AchievementImage source={achievement.imageURL} />
        <AchievementInfo themeColors={themeColors} exists={exists}>
          <STMText size={20} styles={{ padding: 4 }}>
            {achievement.title}
          </STMText>
          <STMText size={14} styles={{ padding: 4 }}>
            {achievement.desc}
          </STMText>
        </AchievementInfo>
      </AchievementCard>
    </>
  );
};

export default AchievementItem;

const AchievementCard = styled.View<{ achievement: AchievementModel }>`
  align-items: center;
  margin-bottom: 15px;
  flex-direction: row;
`;

const AchievementImage = styled.Image`
  width: 80px;
  height: 80px;
  resize-mode: cover;
`;

const AchievementInfo = styled.View<{ themeColors: colorsModel; exists: () => boolean }>`
  flex: 1;
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
  height: 100%;
  background-color: ${({ themeColors, exists }) => (exists() ? themeColors.success : themeColors.lightPurple)};
`;
