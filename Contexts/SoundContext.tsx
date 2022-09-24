import { Audio, AVPlaybackSource, AVPlaybackStatus } from "expo-av";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface SoundContextValue {
  playSound: (path: AVPlaybackSource) => void;
  toggleSound: () => void;
}

const SoundContext = createContext<SoundContextValue>({
  playSound: () => {
    console.warn("this is default provider");
  },
  toggleSound: () => {
    console.warn("this is default provider");
  },
});

interface Props {
  children: ReactNode;
}

function SoundProvider({ children }: Props) {
  const [sound, setSound] = useState<Audio.Sound>();
  const [soundStatus, setSoundStatus] = useState<AVPlaybackStatus>();
  const [isMuted, setIsMuted] = useState<boolean>(false);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
          console.log("Unloading Sound ");
        }
      : undefined;
  }, [sound]);

  const playSound = async (filePath: AVPlaybackSource) => {
    if (!isMuted) {
      const { sound, status } = await Audio.Sound.createAsync(filePath);

      setSound(sound);

      await sound.playAsync();
    }
  };

  const toggleSound = async () => {
    //TODO: Stop sound
    !isMuted ? sound && setSoundStatus(await sound.setIsMutedAsync(true)) : sound && setSoundStatus(await sound.setIsMutedAsync(false));
    setIsMuted(!isMuted);
  };

  return <SoundContext.Provider value={{ playSound, toggleSound }}>{children}</SoundContext.Provider>;
}

export const useSound = () => useContext(SoundContext);

export default SoundProvider;
