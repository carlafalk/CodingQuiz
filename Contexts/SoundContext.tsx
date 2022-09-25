import { Audio, AVPlaybackSource, AVPlaybackStatus } from "expo-av";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import AllSounds, { SoundObject } from "../data/soundData";

interface SoundContextValue {
  allSounds: SoundObject[];
  playSound: (path: AVPlaybackSource) => void;
  playButtonEffect: () => void;
  toggleMuteMusic: () => void;
  toggleMuteButtonSound: () => void;
  setIsButtonSoundMuted: React.Dispatch<React.SetStateAction<boolean>>;
  isButtonSoundMuted: boolean;
  setIsMusicMuted: React.Dispatch<React.SetStateAction<boolean>>;
  isMusicMuted: boolean;
}

const SoundContext = createContext<SoundContextValue>({
  allSounds: [],
  playSound: () => {
    console.warn("this is default provider");
  },
  playButtonEffect: () => console.warn("this is default provider"),
  toggleMuteMusic: () => {
    console.warn("this is default provider");
  },
  toggleMuteButtonSound: () => console.warn("this is default provider"),
  setIsButtonSoundMuted: () => {},
  isButtonSoundMuted: false,
  setIsMusicMuted: () => {},
  isMusicMuted: false,
});

interface Props {
  children: ReactNode;
}

function SoundProvider({ children }: Props) {
  const [allSounds, setAllSounds] = useState<SoundObject[]>(AllSounds);
  const [music, setMusic] = useState<Audio.Sound>();
  const [buttonEffect, setButtonEffect] = useState<Audio.Sound>();
  const [soundStatus, setSoundStatus] = useState<AVPlaybackStatus>();
  const [isMusicMuted, setIsMusicMuted] = useState<boolean>(false);
  const [isButtonSoundMuted, setIsButtonSoundMuted] = useState<boolean>(false);

  useEffect(() => {
    console.log("LOADING ALL SOUNDS");
    LoadAllSounds();
  }, []);

  useEffect(() => {
    return music
      ? () => {
          music.unloadAsync();
        }
      : undefined;
  }, [music]);

  useEffect(() => {
    return buttonEffect
      ? () => {
          buttonEffect.unloadAsync();
        }
      : undefined;
  }, [buttonEffect]);

  const playSound = async (filePath: AVPlaybackSource) => {
    if (!isMusicMuted) {
      const { sound, status } = await Audio.Sound.createAsync(filePath);

      setMusic(sound);

      await sound.playAsync();
    }
  };

  const LoadAllSounds = async () => {
    //TODO: find some way to load all sounds at once? :O
    // const { sound, status } = await Audio.Sound.createAsync(allSounds[1].sound);
    // setButtonEffect(sound);
  };

  const playButtonEffect = async () => {
    // TODO play sound on buttonPress

    if (!isButtonSoundMuted) {
      const { sound, status } = await Audio.Sound.createAsync(allSounds[1].sound);
      await sound.playAsync();
      setButtonEffect(sound);
    }
  };

  const toggleMuteMusic = async () => {
    //TODO: Stop sound
    !isMusicMuted ? music && setSoundStatus(await music.setIsMutedAsync(true)) : music && setSoundStatus(await music.setIsMutedAsync(false));
  };

  const toggleMuteButtonSound = async () => {
    !isButtonSoundMuted
      ? buttonEffect && setSoundStatus(await buttonEffect.setIsMutedAsync(true))
      : buttonEffect && setSoundStatus(await buttonEffect.setIsMutedAsync(false));
  };

  return (
    <SoundContext.Provider
      value={{
        allSounds,
        playSound,
        playButtonEffect,
        toggleMuteMusic,
        toggleMuteButtonSound,
        setIsButtonSoundMuted,
        isButtonSoundMuted,
        setIsMusicMuted,
        isMusicMuted,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
}

export const useSound = () => useContext(SoundContext);

export default SoundProvider;
