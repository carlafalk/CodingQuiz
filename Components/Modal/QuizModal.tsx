import React, { ReactNode } from "react";
import { Modal } from "react-native";
import ModalBackground from "./ModalBackground";
import ModalContainer from "./ModalContainer";

interface Props {
  show: boolean;
  closeModal: () => void;
  title: string;
  children: ReactNode;
  headerColor?: string;
  modalHeight?: string;
  headerImg?: JSX.Element;
}

const QuizModal = ({ show, closeModal, title, headerColor, children, modalHeight, headerImg }: Props) => {
  return (
    <Modal statusBarTranslucent={true} animationType="fade" transparent={true} visible={show} onRequestClose={closeModal}>
      <ModalBackground>
        <ModalContainer height={modalHeight} title={title} closeModal={closeModal} headerColor={headerColor} headerImg={headerImg}>
          {children}
        </ModalContainer>
      </ModalBackground>
    </Modal>
  );
};

export default QuizModal;
