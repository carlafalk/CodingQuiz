import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { BigHead } from "react-native-bigheads";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";
import { useUser } from "../../contexts/UserContext";
import { colorsModel } from "../../models/ColorsModel";
import { User } from "../../models/User";

interface Props {
  handleLogIn: (user: User) => void;
}

const UserExists = ({ handleLogIn }: Props) => {
  const { users } = useUser();
  const { themeColors } = useTheme();
  return (
    <View style={{ width: "100%", padding: 20 }}>
      <InfoText themeColors={themeColors}>
        {users.length > 1 ? "There's multiple users on your phone. Which would you like to log into?" : `Welcome ${users[0].username}!`}
      </InfoText>
      <ScrollView style={{ height: "80%" }}>
        {users.map((user) => (
          <View key={user.id} style={{ padding: 5, alignItems: "center" }}>
            <UserButton onPress={() => handleLogIn(user)} themeColors={themeColors}>
              <ButtonEffect themeColors={themeColors} />
              <BigHead {...user.avatar} size={75} />
              <StyledText themeColors={themeColors} style={{ textAlign: "center" }}>
                {user.username}
              </StyledText>
              <MaterialIcons name="arrow-forward-ios" size={24} color={themeColors.commons.white} />
            </UserButton>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default UserExists;

const UserButton = styled.TouchableOpacity<{
  themeColors: colorsModel;
}>`
  background-color: ${(props) => props.themeColors.darkPurple};
  width: 100%;
  padding: 15px;
  border-radius: 15px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
`;

const ButtonEffect = styled.View<{
  themeColors: colorsModel;
}>`
  background-color: ${(props) => props.themeColors.commons.white};
  height: 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const StyledText = styled.Text<{
  themeColors: colorsModel;
}>`
  color: ${(props) => props.themeColors.commons.white};
`;

const InfoText = styled(StyledText)`
  padding: 10px;
`;
