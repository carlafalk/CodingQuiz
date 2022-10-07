import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import React, { useRef, useState } from "react";
import { AvatarProps, BigHead } from "react-native-bigheads";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";
import { useUser } from "../../contexts/UserContext";
import { colorsModel } from "../../models/ColorsModel";
import { User } from "../../models/User";
import EditUserAvatar from "../Modal/ModalViews/EditUserAvatar";
import UserAchievements from "../Modal/ModalViews/UserAchievements";
import QuizModal from "../Modal/QuizModal";
import STMText from "../Texts/ShareTechMonoText";
import { userNameSchema } from "./CreateUser";

interface Props {
  user: User;
}

export default function CurrentUserInfoContainer({ user }: Props) {
  const { editUser, currentUser } = useUser();
  const { themeColors } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [achievementModalOpen, setAchievementModalOpen] = useState(false);
  const avatarRef = useRef<AvatarProps>(user?.avatar as AvatarProps);

  const editUserHeaderImg = <MaterialIcons name="mode-edit" size={28} color="white" />;
  const achievementHeaderImg = <FontAwesome name="trophy" size={28} color="white" />;

  return (
    <>
      <UserInfoContainer>
        <AchievementButton themeColors={themeColors} onPress={() => setAchievementModalOpen(true)}>
          <FontAwesome name="trophy" size={22} color={themeColors.categories.react} />
        </AchievementButton>
        <BigHeadContainer>
          <BigHead {...user.avatar} size={150} onPress={() => setEditModalOpen(true)} />
          <FontAwesome name="paint-brush" size={16} color={themeColors.categories.react} style={{ position: "absolute", bottom: 5, right: 5 }} />
        </BigHeadContainer>
        <Formik
          validationSchema={userNameSchema}
          initialValues={{ username: user.username }}
          onSubmit={(values) => {
            console.log("ASD");
            currentUser && editUser({ ...currentUser, username: values.username });
          }}
        >
          {({ handleChange, handleBlur, touched, handleSubmit, values, errors }) => {
            return (
              <>
                <UserInfoTextContainer themeColors={themeColors}>
                  <UsernameInput
                    themeColors={themeColors}
                    onChangeText={handleChange("username")}
                    isValidating
                    value={values.username}
                    onSubmitEditing={() => {
                      handleSubmit();
                      setIsFocused(false);
                    }}
                    handleBlur={handleBlur("username")}
                    error={errors.username}
                    maxLength={15}
                    onFocus={() => setIsFocused(true)}
                  />
                  {!isFocused && <MaterialIcons name="mode-edit" size={16} color={themeColors.categories.react} style={{ marginRight: 10 }} />}
                </UserInfoTextContainer>
                {errors.username && (
                  <STMText size={10} styles={{ margin: 4 }}>
                    {errors.username}
                  </STMText>
                )}
              </>
            );
          }}
        </Formik>
      </UserInfoContainer>
      <QuizModal
        show={editModalOpen}
        closeModal={() => setEditModalOpen(false)}
        title={"edit avatar"}
        headerColor={themeColors.darkPurple}
        headerImg={editUserHeaderImg}
      >
        <EditUserAvatar avatarRef={avatarRef} user={user} setModalIsOpen={() => setEditModalOpen(false)} />
      </QuizModal>
      <QuizModal
        modalHeight={"70%"}
        show={achievementModalOpen}
        closeModal={() => setAchievementModalOpen(false)}
        title={"Achievements"}
        headerColor={themeColors.darkPurple}
        headerImg={achievementHeaderImg}
      >
        <UserAchievements />
      </QuizModal>
    </>
  );
}

const BigHeadContainer = styled.View``;
const UserInfoTextContainer = styled.View<{ themeColors: colorsModel }>`
  font-size: 16px;
  border: 1px solid ${({ themeColors }) => themeColors.lightPurple};
  border-radius: 10px;
  background-color: ${({ themeColors }) => themeColors.backgrounds.superLowOpacity};
  margin-top: 10px;
  width: 60%;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
`;

const UserInfoContainer = styled.View`
  margin-top: -10px;
  align-items: center;
  justify-content: center;
  margin: 12px;
`;

const UsernameInput = styled.TextInput<{ themeColors: colorsModel }>`
  padding: 10px 0px;
  text-align: center;
  font-size: 20px;
  color: ${({ themeColors }) => themeColors.commons.white};
  margin-right: auto;
  width: 100%;
  z-index: 999;
`;

const AchievementButton = styled.Pressable<{ themeColors: colorsModel }>`
  padding: 15px;
  z-index: 999;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: ${({ themeColors }) => themeColors.backgrounds.superLowOpacity};
  border-radius: 15px;
`;
