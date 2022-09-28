import { Audio, AVPlaybackSource, AVPlaybackStatus } from "expo-av";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import AllSounds, { SoundObject } from "../data/soundData";
import useAsyncStorage from "../hooks/useAsyncStorage";

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
  isLoaded: boolean;
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
  isLoaded: false,
});

interface Props {
  children: ReactNode;
}

function SoundProvider({ children }: Props) {
  const [allSounds, setAllSounds] = useState<SoundObject[]>(AllSounds);
  const [music, setMusic] = useState<Audio.Sound>();
  const [buttonEffect, setButtonEffect] = useState<Audio.Sound>();
  const [soundStatus, setSoundStatus] = useState<AVPlaybackStatus>();
  const [isMusicMuted, setIsMusicMuted, isLoaded] = useAsyncStorage<boolean>("music-muted", false);
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
    const { sound, status } = await Audio.Sound.createAsync(filePath);

    if (!isMusicMuted) {
      setMusic(sound);
      await sound.playAsync();
      await sound.setIsLoopingAsync(true);
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
    if (!isMusicMuted) {
      setIsMusicMuted(true);
      music && setSoundStatus(await music.setIsMutedAsync(true));
    }
    if (isMusicMuted) {
      setIsMusicMuted(false);
      music && setSoundStatus(await music.setIsMutedAsync(false));
    }

    // !isMusicMuted ? music && setSoundStatus(await music.setIsMutedAsync(true)) : music && setSoundStatus(await music.setIsMutedAsync(false));
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
        isLoaded,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
}

export const useSound = () => useContext(SoundContext);

export default SoundProvider;
