import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { Image, ScrollView, View } from "react-native";
import { AvatarProps, BigHead } from "react-native-bigheads";
import styled from "styled-components/native";
import CSSImg from "../../assets/languageIcons/css-3.png";
import HTMLImg from "../../assets/languageIcons/html-5.png";
import JSImg from "../../assets/languageIcons/js.png";
import ReactImg from "../../assets/languageIcons/react.png";
import TSImg from "../../assets/languageIcons/typescript.png";
import { useTheme } from "../../contexts/ThemeContext";
import { useUser } from "../../contexts/UserContext";
import { colorsModel } from "../../models/ColorsModel";
import { User } from "../../models/User";
import ModalStandardButton from "../Buttons/ModalStandardButton";
import CategoryStats from "../CategoryStats";
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

  function getFavoriteImg(category: string) {
    if (category === "react") return ReactImg;
    if (category === "html") return CSSImg;
    if (category === "css") return HTMLImg;
    if (category === "javascript") return JSImg;
    if (category === "typescript") return TSImg;
  }
  const mostPlayedCategory = () => {
    if (currentUser) {
      if (currentUser.gameSessions.length > 0) {
        const gameSessionCopy = { ...currentUser };
        const mostPlayed = gameSessionCopy.gameSessions.sort(
          (a, b) =>
            currentUser.gameSessions.filter((v) => v.category === a.category).length -
            currentUser.gameSessions.filter((v) => v.category === b.category).length
        );
        return mostPlayed[mostPlayed.length - 1].category;
      } else return "N/A";
    } else return "N/A";
  };

  const totalPoints = () => {
    // use reduce instead
    if (currentUser) {
      let totalPoints = 0;
      currentUser.gameSessions.forEach((gameSession) => (totalPoints += gameSession.points));
      return totalPoints;
    } else return 0;
  };

  return (
    <>
      <View style={{ flexDirection: "row", margin: 12 }}>
        <UserInfoContainer>
          <View>
            <BigHead {...user.avatar} size={150} onPress={() => setEditModalOpen(true)} />
            <FontAwesome name="paint-brush" size={16} color={themeColors.categories.react} style={{ position: "absolute", bottom: 5, right: 5 }} />
          </View>
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
            {!isFocused && <MaterialIcons name="mode-edit" size={16} color={themeColors.categories.react} style={{ marginRight: 10 }} />}
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
            <View style={{ backgroundColor: themeColors.darkPurple, borderRadius: 8, elevation: 8, height: 200 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 8, paddingHorizontal: 4 }}>
                <STMText size={11} uppercase>
                  Games played
                </STMText>
                <STMText size={11}>{currentUser?.gameSessions.length}</STMText>
              </View>
              {/* <Divider color={themeColors.commons.white} style={{ width: "100%" }} /> */}

              <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 8, paddingHorizontal: 4 }}>
                <STMText size={11} uppercase>
                  Correct answers
                </STMText>
                <STMText size={11}>
                  {totalPoints()}/{currentUser && currentUser.gameSessions.length * 10}
                </STMText>
              </View>
              {/* <Divider color={themeColors.commons.white} style={{ width: "100%" }} /> */}
              <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 8, paddingHorizontal: 4 }}>
                <STMText size={11} uppercase>
                  Rights / Quiz
                </STMText>
                <STMText size={11}>{currentUser && (totalPoints() * 10) / (currentUser.gameSessions.length * 10)}</STMText>
              </View>
              {/* <Divider color={themeColors.commons.white} style={{ width: "100%" }} /> */}
              <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 8, paddingHorizontal: 4, alignItems: "center" }}>
                <STMText size={11} uppercase>
                  Favorite category
                </STMText>
                <Image source={getFavoriteImg(mostPlayedCategory())} style={{ width: 15, height: 15 }}></Image>
                {/* <STMText size={11}>{mostPlayedCategory()}</STMText> */}
              </View>
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
            <View style={{ height: 200, padding: 5, borderRadius: 8, backgroundColor: themeColors.darkPurple }}>
              <ScrollView decelerationRate={0} snapToAlignment={"center"}>
                <CategoryStats category="react" />
                <CategoryStats category="html" />
                <CategoryStats category="css" />
                <CategoryStats category="javascript" />
                <CategoryStats category="typescript" />
              </ScrollView>
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

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  justify-content: center;
  padding: 12px 0px;
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
