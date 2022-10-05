import React, { SetStateAction } from "react";
import styled from "styled-components/native";
import { useTheme } from "../../../contexts/ThemeContext";
import ModalStandardButton from "../../Buttons/ModalStandardButton";
import STMText from "../../Texts/ShareTechMonoText";

interface Props {
  handleDelete: () => void;
  setConfirmModalOpen: React.Dispatch<SetStateAction<boolean>>;
}

const DeleteUser = ({ handleDelete, setConfirmModalOpen }: Props) => {
  const { themeColors } = useTheme();
  return (
    <>
      <TextContainer>
        <STMText size={15}>Are you sure you want to delete this user?</STMText>
      </TextContainer>
      <ButtonContainer>
        <ModalStandardButton onPress={handleDelete} title="Delete" color={themeColors.danger} />
        <ModalStandardButton onPress={() => setConfirmModalOpen(false)} title="Cancel" color={themeColors.lightGrey} />
      </ButtonContainer>
    </>
  );
};

const TextContainer = styled.View`
  align-items: center;
  padding: 10px;
`;
const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;
export default DeleteUser;
