import { MaterialIcons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { View } from "react-native";
import { AvatarProps, BigHead } from "react-native-bigheads";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";
import { useUser } from "../../contexts/UserContext";
import { colorsModel } from "../../models/ColorsModel";
import { User } from "../../models/User";
import ModalStandardButton from "../Buttons/ModalStandardButton";
import QuizModal from "../Modal/QuizModal";
import STMText from "../Texts/ShareTechMonoText";
import AvatarCreator from "./AvatarCreator";

interface Props {
  handleClose: () => void;
  user: User;
}

const UserInfo = ({ handleClose, user }: Props) => {
  const { themeColors } = useTheme();
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const { deleteUser, currentUser, logOutUser, editUser } = useUser();
  const [username, setUsername] = useState(currentUser?.username);
  const [isFocused, setIsFocused] = useState(false);
  const avatarRef = useRef<AvatarProps>(user?.avatar as AvatarProps);

  const editUserHeaderImg = <MaterialIcons name="mode-edit" size={28} color="white" />;
  const deleteUserHeaderImg = <MaterialIcons name="delete-forever" size={28} color="white" />;
  return (
    <>
      <View style={{ flexDirection: "row", margin: 12 }}>
        <UserInfoContainer>
          <BigHead {...user.avatar} size={150} onPress={() => setEditModalOpen(true)} />
          <UserInfoTextContainer themeColors={themeColors}>
            <UsernameInput
              themeColors={themeColors}
              onChangeText={setUsername}
              value={username}
              onSubmitEditing={() => {
                editUser({ ...user, username: username as string });
                setIsFocused(false);
              }}
              onFocus={() => setIsFocused(true)}
            />
            {!isFocused && <MaterialIcons name="mode-edit" size={16} color={themeColors.commons.white} style={{ marginRight: 10 }} />}
          </UserInfoTextContainer>
        </UserInfoContainer>
      </View>
      <View style={{ margin: 4, alignItems: "center", flex: 1 }}>
        <View style={{ backgroundColor: themeColors.lightPurple, borderRadius: 5, paddingHorizontal: 24, paddingVertical: 10, elevation: 8 }}>
          <STMText size={16} center uppercase>
            stats
          </STMText>
        </View>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View style={{ padding: 10, flex: 1 }}>
            <View
              style={{
                backgroundColor: themeColors.lightGreen,
                borderRadius: 5,
                paddingHorizontal: 24,
                paddingVertical: 6,
                marginBottom: 6,
                elevation: 8,
              }}
            >
              <STMText size={16} center uppercase>
                General
              </STMText>
            </View>
            <View style={{ backgroundColor: themeColors.darkPurple, borderRadius: 8, elevation: 8, flex: 1 }}>
              <STMText size={14} styles={{ padding: 4 }}>
                [Games played] 69
              </STMText>
              <STMText size={14} styles={{ padding: 4 }}>
                [R:Q] 0.44
              </STMText>
              <STMText size={14} styles={{ padding: 4 }}>
                [Best Category] React
              </STMText>
            </View>
          </View>
          <View style={{ padding: 10, flex: 1 }}>
            <View
              style={{
                backgroundColor: themeColors.categories.javaScript,
                borderRadius: 5,
                paddingHorizontal: 24,
                paddingVertical: 6,
                marginBottom: 6,
                elevation: 8,
              }}
            >
              <STMText size={16} center uppercase>
                Categories
              </STMText>
            </View>
            <View style={{ backgroundColor: themeColors.darkPurple, borderRadius: 8, elevation: 8, flex: 1 }}>
              <STMText size={14} styles={{ padding: 4 }}>
                Games played: 69
              </STMText>
              <STMText size={14} styles={{ padding: 4 }}>
                Stat 2:
              </STMText>
              <STMText size={14} styles={{ padding: 4 }}>
                Stat 3:
              </STMText>
            </View>
          </View>
        </View>
      </View>
      <ButtonContainer>
        <ModalStandardButton onPress={() => setConfirmModalOpen(true)} title="Delete" color={themeColors.danger} />
        <ModalStandardButton
          onPress={() => {
            handleClose();
            console.log("edit user");
          }}
          title="Edit"
          color={themeColors.mustard}
        />
        <ModalStandardButton
          onPress={() => {
            handleClose();
            logOutUser();
          }}
          title="Log out"
          color={themeColors.lightGrey}
        />
      </ButtonContainer>
      <QuizModal
        show={confirmModalOpen}
        closeModal={() => setConfirmModalOpen(false)}
        title={"confirm"}
        headerColor={themeColors.danger}
        headerImg={deleteUserHeaderImg}
      >
        <View style={{ alignItems: "center", padding: 10 }}>
          <STMText size={15}>Are you sure you want to delete this user?</STMText>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <ModalStandardButton
            onPress={() => {
              setConfirmModalOpen(false);
              handleClose();
              deleteUser(user);
            }}
            title="Delete"
            color={themeColors.mustard}
          />
          <ModalStandardButton onPress={() => setConfirmModalOpen(false)} title="Cancel" color={themeColors.mustard} />
        </View>
      </QuizModal>
      <QuizModal
        show={editModalOpen}
        closeModal={() => setEditModalOpen(false)}
        title={"edit avatar"}
        headerColor={themeColors.darkPurple}
        headerImg={editUserHeaderImg}
      >
        <View style={{ alignItems: "center", padding: 10 }}>
          <STMText size={15}>Edit your avatar!</STMText>
        </View>
        <View style={{ padding: 15, marginTop: -20 }}>
          <AvatarCreator avatarRef={avatarRef} />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <ModalStandardButton
            onPress={() => {
              editUser({ ...user, avatar: avatarRef.current.valueOf() });
              setEditModalOpen(false);
            }}
            title="Save"
            color={themeColors.success}
          />
          <ModalStandardButton onPress={() => setEditModalOpen(false)} title="Cancel" color={themeColors.mustard} />
        </View>
      </QuizModal>
    </>
  );
};

export default UserInfo;

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

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  justify-content: center;
  padding: 12px 0px;
`;

const StyledText = styled.Text<{
  themeColors: colorsModel;
}>`
  color: ${(props) => props.themeColors.commons.white};
`;

const InfoText = styled(StyledText)`
  padding: 10px;
`;

const AvatarImage = styled.Image`
  height: 50px;
  width: 50px;
`;

const UserInfoTextContainer = styled.View<{ themeColors: colorsModel }>`
  font-size: 16px;
  border: 1px solid ${({ themeColors }) => themeColors.lightPurple};
  border-radius: 10px;
  background-color: ${({ themeColors }) => themeColors.backgrounds.superLowOpacity};
  margin-top: 10px;
  width: 50%;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
`;

const UserInfoContainer = styled.View`
  margin-top: -10px;
  flex: 1;
  align-items: center;
  justify-content: center;
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