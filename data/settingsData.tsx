import { SettingModel } from "../models/SettingModel";
const settingsData: SettingModel[] = [
  {
    category: "Theme",
    title: "Dark Mode",
    desc: "Toggle between dark and light mode",
    isEnabled: true,
  },
  {
    category: "Audio",
    title: "Music",
    desc: "Toggle music",
    isEnabled: true,
  },
  {
    category: "Audio",
    title: "Effects",
    desc: "Toggle effects",
    isEnabled: true,
  },
  {
    category: "Feedback",
    title: "Haptics",
    desc: "Toggle haptic feedback",
    isEnabled: false,
  },
  {
    category: "Feedback",
    title: "Vibration",
    desc: "Toggle vibration feedback",
    isEnabled: true,
  },
  {
    category: "Notifications",
    title: "All notifications",
    desc: "Toggle notifications",
    isEnabled: true,
  },
];

export default settingsData;
