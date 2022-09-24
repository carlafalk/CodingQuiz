import { Audio, AVPlaybackSource } from "expo-av";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface SoundContextValue {
  playSound: (path: AVPlaybackSource) => void;
  stopSound: () => void;
}

const SoundContext = createContext<SoundContextValue>({
  playSound: () => {
    console.warn("this is default provider");
  },
  stopSound: () => {
    console.warn("this is default provider");
  },
});

interface Props {
  children: ReactNode;
}

function SoundProvider({ children }: Props) {
  const [sound, setSound] = useState<Audio.Sound>();

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound ");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const playSound = async (filePath: AVPlaybackSource) => {
    //TODO: Play sound
    const { sound, status } = await Audio.Sound.createAsync(filePath);
    console.log(status.isLoaded);
    setSound(sound);

    await sound.playAsync();
    console.log("Playing Sound: " + filePath);
  };

  const stopSound = async () => {
    //TODO: Stop sound
  };

  return <SoundContext.Provider value={{ playSound, stopSound }}>{children}</SoundContext.Provider>;
}

export const useSound = () => useContext(SoundContext);

export default SoundProvider;
