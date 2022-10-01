import React from "react";
import { View } from "react-native";
import { BigHead } from "react-native-bigheads";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";
import { useUser } from "../../contexts/UserContext";
import { colorsModel } from "../../models/ColorsModel";
import { User } from "../../models/User";
import ModalStandardButton from "../Buttons/ModalStandardButton";
import STMText from "../Texts/ShareTechMonoText";

interface Props {
  handleClose: () => void;
  user: User;
}

const UserInfo = ({ handleClose, user }: Props) => {
  const { themeColors } = useTheme();
  const { deleteUser, currentUser } = useUser();
  return (
    <>
      <View style={{ flexDirection: "row", margin: 12 }}>
        <View style={{ flex: 1, backgroundColor: "blue", alignItems: "center", justifyContent: "center", padding: 8 }}>
          <BigHead {...user.avatar} size={100} />
          <InfoText themeColors={themeColors}>{user.username}</InfoText>
        </View>
        <View style={{ backgroundColor: "green", flex: 2, padding: 12 }}>
          <STMText size={16} center uppercase>
            stats
          </STMText>
          <View style={{ backgroundColor: "teal" }}>
            <STMText size={14} styles={{ padding: 4 }}>
              Stat 1:
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
      <ButtonContainer>
        <ModalStandardButton
          onPress={() => {
            handleClose();
            deleteUser(user);
          }}
          title="Delete"
          color={themeColors.mustard}
        />
        <ModalStandardButton
          onPress={() => {
            handleClose();
            console.log("edit user");
          }}
          title="Edit"
          color={themeColors.mustard}
        />
      </ButtonContainer>
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
  width: 50%;
  background-color: red;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 12px;
  margin-left: 12px;
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
