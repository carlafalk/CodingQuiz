import { AVPlaybackSource } from "expo-av";

export interface SoundObject {
  sound: AVPlaybackSource;
}

const AllSounds: SoundObject[] = [
  { sound: require("../assets/sounds/HomeScreenMusic.mp3") },
  { sound: require("../assets/sounds/StandardButtonEffect.mp3") },
  { sound: require("../assets/sounds/GameMusic.mp3") },
  { sound: require("../assets/sounds/GetReadySound.mp3") },
  { sound: require("../assets/sounds/answerClick.mp3") },
  { sound: require("../assets/sounds/submit.mp3") },
];

export default AllSounds;
