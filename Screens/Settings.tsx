import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SettingItem from "../Components/Settings/SettingItem";
import settingsData from "../data/settingsData";
import { LgText, XlText } from "../Styles/texts";
import { Container, Divider } from "../Styles/views";

const SettingsScreen = () => {
  const categories = settingsData.filter((x, i) => settingsData.findIndex((y) => x.category === y.category) === i).map((x) => x.category);

  return (
    <ScrollView>
      <View>
        <XlText>Settings</XlText>
      </View>
      <Divider />
      {categories.map((category) => (
        <Container key={category}>
          <LgText>{category}</LgText>
          {settingsData
            .filter((setting) => setting.category === category)
            .map((item) => (
              <SettingItem key={item.title} item={item} />
            ))}
          <Divider />
        </Container>
      ))}
    </ScrollView>
  );
};

export default SettingsScreen;