import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SettingItem from "../Components/Settings/SettingItem";
import { useHaptics } from "../contexts/HapticsContext";
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
  const { toggleMuteMusic, toggleMuteButtonSound, setIsButtonSoundMuted, isButtonSoundMuted, isMusicMuted, setIsMusicMuted } = useSound();
  const { setIsHapticsDisabled, isHapticsDisabled, toggleHapticsIsDisabled } = useHaptics();
  // const { toggleHapticSetting, toggleVibrationSetting, toggleMusicSetting, toggleEffectsSetting } = useSettings();

  function handleToggle(item: SettingModel, value: boolean) {
    if (item.title === "Dark Mode") {
      toggleTheme();
    }
    if (item.title === "Music") {
      toggleMuteMusic();
    }
    if (item.title === "Effects") {
      toggleMuteButtonSound();
      setIsButtonSoundMuted(!isButtonSoundMuted);
    }
    if (item.title === "Haptics") {
      toggleHapticsIsDisabled();
    }
  }

  const getToggleValues = (item: SettingModel) => {
    if (item.title === "Effects") return !isButtonSoundMuted;
    if (item.title === "Music") return !isMusicMuted;
    if (item.title === "Haptics") return !isHapticsDisabled;
    return true;
  };

  return (
    <ScrollView>
      <View>
        <XlText style={{ color: themeColors.commons.white }}>Settings</XlText>
      </View>
      <Divider color={themeColors.commons.white} />
      {categories.map((category) => (
        <Container key={category}>
          <LgText style={{ color: themeColors.commons.white }}>{category}</LgText>
          {settingsData
            .filter((setting) => setting.category === category)
            .map((item) => (
              <SettingItem
                key={item.title}
                item={item}
                handleToggle={(value) => handleToggle(item, value)}
                setToggleValue={() => getToggleValues(item)}
              />
            ))}
          <Divider color={themeColors.commons.white} />
        </Container>
      ))}
    </ScrollView>
  );
};

export default SettingsScreen;
