import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";
import { colorsModel } from "../../models/ColorsModel";

const UserForm = () => {
  const [text, onChangeText] = React.useState("");
  const { themeColors } = useTheme();

  return (
    <View>
      <Input themeColors={themeColors} onChangeText={onChangeText} value={text} placeholder="Textsdasd" />
    </View>
  );
};

export default UserForm;

const Input = styled.TextInput<{
  themeColors: colorsModel;
}>`
  color: ${(props) => props.themeColors.commons.white};
  height: 40px;
  border: 1px solid ${(props) => props.themeColors.commons.white};
  padding: 10px;
  margin: 10px 0;
`;
