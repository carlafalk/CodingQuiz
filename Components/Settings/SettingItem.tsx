import React, { useState } from "react";
import { Switch, View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { SettingModel } from "../../models/SettingModel";
import { colors } from "../../Styles/Shared";
import { MdText, SmText } from "../../Styles/texts";
import { FlexBox } from "../../Styles/views";

interface Props {
  item: SettingModel;
  handleToggle: () => void;
}
const SettingItem = ({ item, handleToggle }: Props) => {
  const [isEnabled, setIsEnabled] = useState(item.isEnabled);
  const { themeColors } = useTheme();
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    handleToggle();
  };

  return (
    <FlexBox>
      <View>
        <MdText style={{color: themeColors.commons.white}}>{item.title}</MdText>
        <SmText style={{color: themeColors.commons.white}}>{item.desc}</SmText>
      </View>
      <View>
        <Switch
          trackColor={{ false: colors.lightGrey, true: colors.lightGreen }}
          thumbColor={isEnabled ? "#fff" : colors.deepPurple}
          ios_backgroundColor={colors.deepPurple}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </FlexBox>
  );
};

export default SettingItem;
