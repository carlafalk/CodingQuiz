import { Audio, AVPlaybackStatus } from "expo-av";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import AllSounds, { SoundObject } from "../data/soundData";
import useAsyncStorage from "../hooks/useAsyncStorage";

interface SoundContextValue {
  allSounds: SoundObject[];
  playHomeMusic: () => void;
  playGameMusic: () => void;
  playSubmitSound: () => void;
  playAnswerSound: () => void;
  playButtonEffect: () => void;
  playGetReadySound: () => void;
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
  playHomeMusic: () => {
    console.warn("this is default provider");
  },
  playGetReadySound: () => {},
  playGameMusic: () => {
    console.warn("this is default provider");
  },
  playButtonEffect: () => console.warn("this is default provider"),
  playSubmitSound: () => {},
  playAnswerSound: () => {},
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
  const [isButtonSoundMuted, setIsButtonSoundMuted] = useAsyncStorage<boolean>("button-muted", false);

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

  const playHomeMusic = async () => {
    const { sound, status } = await Audio.Sound.createAsync(allSounds[0].sound);

    if (!isMusicMuted) {
      setMusic(sound);
      await sound.playAsync();
      await sound.setIsLoopingAsync(true);
    }
  };

  const playGameMusic = async () => {
    const { sound, status } = await Audio.Sound.createAsync(allSounds[2].sound);
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

  const playGetReadySound = async () => {
    if (!isMusicMuted) {
      const { sound } = await Audio.Sound.createAsync(allSounds[3].sound);
      setMusic(sound);
      await sound.playAsync();
    }
  };

  const playSubmitSound = async () => {
    if (!isButtonSoundMuted) {
      const { sound } = await Audio.Sound.createAsync(allSounds[5].sound);
      setButtonEffect(sound);
      await sound.playAsync();
    }
  };

  const playAnswerSound = async () => {
    if (!isButtonSoundMuted) {
      const { sound } = await Audio.Sound.createAsync(allSounds[4].sound);
      setButtonEffect(sound);
      await sound.playAsync();
    }
  };

  const toggleMuteMusic = async () => {
    //TODO: Stop sound
    if (!isMusicMuted) {
      setIsMusicMuted(true);
      music && (await music.setIsMutedAsync(true));
    }
    if (isMusicMuted) {
      setIsMusicMuted(false);
      music && (await music.setIsMutedAsync(false));
    }

    // !isMusicMuted ? music && setSoundStatus(await music.setIsMutedAsync(true)) : music && setSoundStatus(await music.setIsMutedAsync(false));
  };

  const toggleMuteButtonSound = async () => {
    !isButtonSoundMuted ? buttonEffect && (await buttonEffect.setIsMutedAsync(true)) : buttonEffect && (await buttonEffect.setIsMutedAsync(false));
  };

  return (
    <SoundContext.Provider
      value={{
        allSounds,
        playHomeMusic,
        playGameMusic,
        playButtonEffect,
        playGetReadySound,
        toggleMuteMusic,
        toggleMuteButtonSound,
        setIsButtonSoundMuted,
        playSubmitSound,
        playAnswerSound,
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
