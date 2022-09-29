import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";
import { colorsModel } from "../../models/ColorsModel";
import AvatarCreator from "./AvatarCreator";
import UserForm from "./UserForm";

interface Props {
  handleClose: () => void;
}

const CreateUser = ({ handleClose }: Props) => {
  const { themeColors } = useTheme();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 10, backgroundColor: "#00000090" }}>
      <View style={{ width: "100%", alignItems: "center", backgroundColor: themeColors.deepPurple, borderRadius: 10 }}>
        <Header themeColors={themeColors}>
          <TouchableOpacity style={{ position: "absolute", top: "50%", right: 20 }} onPress={handleClose}>
            <MaterialIcons name="close" size={32} color={themeColors.commons.white} />
          </TouchableOpacity>
          <StyledText themeColors={themeColors}>Create user</StyledText>
        </Header>
        <View style={{ width: "100%", padding: 30 }}>
          <StyledText themeColors={themeColors}>Pick a username</StyledText>
          <UserForm />
          <View style={{ width: "100%" }}>
            <AvatarCreator />
          </View>
        </View>
        <TouchableOpacity style={{ padding: 20, marginVertical: 40, backgroundColor: "orange", width: "50%", borderRadius: 10 }}>
          <Text style={{ color: "white", textAlign: "center" }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateUser;

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
