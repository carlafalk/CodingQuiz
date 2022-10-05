import React from "react";
import { AvatarProps } from "react-native-bigheads/dist/components/Avatar";
import styled from "styled-components/native";
import { useTheme } from "../../../contexts/ThemeContext";
import { useUser } from "../../../contexts/UserContext";
import { User } from "../../../models/User";
import ModalStandardButton from "../../Buttons/ModalStandardButton";
import STMText from "../../Texts/ShareTechMonoText";
import AvatarCreator from "../../User/AvatarCreator";

interface Props {
  avatarRef: React.MutableRefObject<AvatarProps>;
  user: User;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditUserAvatar = ({ avatarRef, user, setModalIsOpen }: Props) => {
  const { themeColors } = useTheme();
  const { editUser } = useUser();

  return (
    <>
      <Title>
        <STMText size={15}>Edit your avatar!</STMText>
      </Title>
      <AvatarCreatorContainer>
        <AvatarCreator avatarRef={avatarRef} />
      </AvatarCreatorContainer>
      <ButtonContainer>
        <ModalStandardButton
          onPress={() => {
            editUser({ ...user, avatar: avatarRef.current.valueOf() });
            setModalIsOpen(false);
          }}
          title="Save"
          color={themeColors.success}
        />
        <ModalStandardButton onPress={() => setModalIsOpen(false)} title="Cancel" color={themeColors.lightGrey} />
      </ButtonContainer>
    </>
  );
};

const Title = styled.View`
  align-items: center;
  padding: 10px;
`;

const AvatarCreatorContainer = styled.View`
  padding: 15px;
  margin-top: -20px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export default EditUserAvatar;
