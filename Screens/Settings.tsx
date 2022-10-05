import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SettingItem from "../Components/Settings/SettingItem";
import RegularText from "../Components/Texts/RegularText";
import { useHaptics } from "../contexts/HapticsContext";
import { useSound } from "../contexts/SoundContext";
import { useTheme } from "../contexts/ThemeContext";
import { useVibrations } from "../contexts/VibrationsContext";
import settingsData from "../data/settingsData";
import { SettingModel } from "../models/SettingModel";
import { Container, Divider } from "../Styles/views";

const SettingsScreen = () => {
  const categories = settingsData.filter((x, i) => settingsData.findIndex((y) => x.category === y.category) === i).map((x) => x.category);

  const { themeColors, isDarkTheme, toggleThemeIsDisabled } = useTheme();
  const { toggleMuteMusic, toggleMuteButtonSound, setIsButtonSoundMuted, isButtonSoundMuted, isMusicMuted, setIsMusicMuted } = useSound();
  const { isHapticsDisabled, toggleHapticsIsDisabled } = useHaptics();
  const { toggleIsVibrationsDisabled, isVibrationsDisabled } = useVibrations();

  function handleToggle(item: SettingModel, value: boolean) {
    if (item.title === "Dark Mode") {
      toggleThemeIsDisabled();
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
    if (item.title === "Vibration") {
      toggleIsVibrationsDisabled();
    }
  }

  const getToggleValues = (item: SettingModel) => {
    if (item.title === "Dark Mode") return isDarkTheme;
    if (item.title === "Effects") return !isButtonSoundMuted;
    if (item.title === "Music") return !isMusicMuted;
    if (item.title === "Haptics") return !isHapticsDisabled;
    if (item.title === "Vibration") return !isVibrationsDisabled;
    return true;
  };

  return (
    <ScrollView>
      <View>
        <RegularText size={32}>Settings</RegularText>
      </View>
      <Divider color={themeColors.commons.white} />
      {categories.map((category) => (
        <Container key={category}>
          <RegularText size={28}>{category}</RegularText>
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
