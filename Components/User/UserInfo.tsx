import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";
import { colorsModel } from "../../models/ColorsModel";
import { User } from "../../models/User";

interface Props {
  handleClose: () => void;
  user: User;
}

const UserInfo = ({ handleClose, user }: Props) => {
  const { themeColors } = useTheme();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 10, backgroundColor: "#00000090" }}>
      <View style={{ width: "100%", alignItems: "center", backgroundColor: themeColors.deepPurple, borderRadius: 10 }}>
        <Header themeColors={themeColors}>
          <TouchableOpacity style={{ position: "absolute", top: "50%", right: 20 }} onPress={handleClose}>
            <MaterialIcons name="close" size={32} color={themeColors.commons.white} />
          </TouchableOpacity>
          <StyledText themeColors={themeColors}>Selected user</StyledText>
        </Header>
        <View style={{ width: "100%", padding: 20 }}>
          <InfoText themeColors={themeColors}>{user.username}</InfoText>
          <AvatarImage source={user.avatar} />
        </View>
      </View>
    </View>
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
