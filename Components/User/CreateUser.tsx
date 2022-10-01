import React, { useRef, useState } from "react";
import { AvatarProps } from "react-native-bigheads";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";
import { useUser } from "../../contexts/UserContext";
import { defaultAvatar } from "../../data/avatarData";
import { colorsModel } from "../../models/ColorsModel";
import HomeScreenButton from "../Buttons/HomeScreenButton";
import STMText from "../Texts/ShareTechMonoText";
import AvatarCreator from "./AvatarCreator";

interface Props {
  handleClose: () => void;
}

const CreateUser = ({ handleClose }: Props) => {
  const [username, setUsername] = useState("");
  const { themeColors } = useTheme();
  const { createUser } = useUser();
  const avatarRef = useRef<AvatarProps>(defaultAvatar);

  const handleCreateUser = () => {
    createUser({
      username: username,
      avatar: avatarRef.current.valueOf(),
    });

    handleClose();
  };

  return (
    <>
      <ContentContainer>
        <STMText size={14}>Pick a username</STMText>
        <Input onChangeText={setUsername} themeColors={themeColors} value={username} />
        <AvatarCreator avatarRef={avatarRef} />
      </ContentContainer>
      <HomeScreenButton title="submit" color={themeColors.mustard} onPress={handleCreateUser} />
    </>
  );
};

export default CreateUser;

const ContentContainer = styled.View`
  padding: 30px;
`;

const Input = styled.TextInput<{
  themeColors: colorsModel;
}>`
  color: ${(props) => props.themeColors.commons.white};
  height: 40px;
  border: 1px solid ${(props) => props.themeColors.commons.white};
  padding: 10px;
  margin: 10px 0;
`;
