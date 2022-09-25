import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SettingItem from "../Components/Settings/SettingItem";
import { useSound } from "../contexts/SoundContext";
// import { useSettings } from "../contexts/SettingContext";
import { useTheme } from "../contexts/ThemeContext";
import settingsData from "../data/settingsData";
import { SettingModel } from "../models/SettingModel";
import { LgText, XlText } from "../Styles/texts";
import { Container, Divider } from "../Styles/views";

const SettingsScreen = () => {
  const categories = settingsData.filter((x, i) => settingsData.findIndex((y) => x.category === y.category) === i).map((x) => x.category);

  const { themeColors, toggleTheme } = useTheme();
  const { toggleMuteMusic, toggleMuteButtonSound } = useSound();
  // const { toggleHapticSetting, toggleVibrationSetting, toggleMusicSetting, toggleEffectsSetting } = useSettings();

  function handleToggle(item: SettingModel) {
    if (item.title === "Dark Mode") toggleTheme();
    if (item.title === "Music") toggleMuteMusic();
    if (item.title === "Effects") toggleMuteButtonSound();
    // if (item.title === "Haptics") toggleHapticSetting();
    // if (item.title === "Vibration") toggleVibrationSetting();
  }

  return (
    <ScrollView>
      <View>
        <XlText style={{ color: themeColors.commons.white }}>Settings</XlText>
      </View>
      <Divider />
      {categories.map((category) => (
        <Container key={category}>
          <LgText style={{ color: themeColors.commons.white }}>{category}</LgText>
          {settingsData
            .filter((setting) => setting.category === category)
            .map((item) => (
              <SettingItem key={item.title} item={item} handleToggle={() => handleToggle(item)} />
            ))}
          <Divider style={{ borderBottomColor: "#fff" }} />
        </Container>
      ))}
    </ScrollView>
  );
};

export default SettingsScreen;
