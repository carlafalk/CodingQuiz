import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";
import { useUser } from "../../contexts/UserContext";
import { User } from "../../models/User";
import ModalStandardButton from "../Buttons/ModalStandardButton";
import DeleteUser from "../Modal/ModalViews/DeleteUser";
import QuizModal from "../Modal/QuizModal";
import CurrentUserInfoContainer from "./CurrentUserInfoContainer";
import UserStats from "./UserStats";

interface Props {
  handleClose: () => void;
  user: User;
}

const UserInfo = ({ handleClose, user }: Props) => {
  const { themeColors } = useTheme();
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const { deleteUser, logOutUser } = useUser();

  const deleteUserHeaderImg = <MaterialIcons name="delete-forever" size={28} color="white" />;

  function handleLogout() {
    handleClose();
    logOutUser();
  }

  function handleDelete() {
    setConfirmModalOpen(false);
    handleClose();
    deleteUser(user);
  }

  return (
    <>
      <CurrentUserInfoContainer user={user} />
      <UserStats />
      <ButtonContainer>
        <ModalStandardButton onPress={() => setConfirmModalOpen(true)} title="Delete" color={themeColors.danger} />
        <ModalStandardButton onPress={handleLogout} title="Log out" color={themeColors.lightGrey} />
      </ButtonContainer>
      <QuizModal
        show={confirmModalOpen}
        closeModal={() => setConfirmModalOpen(false)}
        title={"confirm"}
        headerColor={themeColors.danger}
        headerImg={deleteUserHeaderImg}
      >
        <DeleteUser handleDelete={handleDelete} setConfirmModalOpen={setConfirmModalOpen} />
      </QuizModal>
    </>
  );
};

export default UserInfo;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  justify-content: center;
  padding: 12px 0px;
`;
