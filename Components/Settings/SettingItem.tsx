import React, { useState } from "react";
import { Switch, View } from "react-native";
import { SettingModel } from "../../models/SettingModel";
import { colors } from "../../Styles/Shared";
import { MdText, SmText } from "../../Styles/texts";
import { FlexBox } from "../../Styles/views";

interface Props {
  item: SettingModel;
}
const SettingItem = ({ item }: Props) => {
  const [isEnabled, setIsEnabled] = useState(item.isEnabled);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <FlexBox>
      <View>
        <MdText>{item.title}</MdText>
        <SmText>{item.desc}</SmText>
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
