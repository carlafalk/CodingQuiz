import { MaterialIcons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { AvatarProps } from "react-native-bigheads";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";
import { useUser } from "../../contexts/UserContext";
import { defaultAvatar } from "../../data/avatarData";
import { colorsModel } from "../../models/ColorsModel";
import HomeScreenButton from "../Buttons/HomeScreenButton";
import ModalBackground from "../ModalBackground";
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
    <ModalBackground styles={{ padding: 10 }}>
      <ModalContainer themeColors={themeColors}>
        <Header themeColors={themeColors}>
          <CloseButton onPress={handleClose}>
            <MaterialIcons name="close" size={32} color={themeColors.commons.white} />
          </CloseButton>
          <StyledText themeColors={themeColors}>Create user</StyledText>
        </Header>
        <ContentContainer>
          <STMText size={14}>Pick a username</STMText>
          <Input onChangeText={setUsername} themeColors={themeColors} value={username} />
          <AvatarCreator avatarRef={avatarRef} />
        </ContentContainer>
        <HomeScreenButton title="create" color={themeColors.mustard} onPress={handleCreateUser} />
      </ModalContainer>
    </ModalBackground>
  );
};

export default CreateUser;

const ModalContainer = styled.View<{ themeColors: colorsModel }>`
  width: 100%;
  align-items: center;
  background-color: ${({ themeColors }) => themeColors.deepPurple};
  border-radius: 10px;
`;

const Header = styled.View<{
  themeColors: colorsModel;
}>`
  background-color: ${(props) => props.themeColors.darkPurple};
  align-items: center;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  justify-content: center;
  padding: 15px;
`;

const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 50%;
  right: 20px;
`;

const ContentContainer = styled.View`
  padding: 30px;
`;

const StyledText = styled.Text<{
  themeColors: colorsModel;
}>`
  color: ${(props) => props.themeColors.commons.white};
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
