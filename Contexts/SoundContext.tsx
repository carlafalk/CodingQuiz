import { createContext, ReactNode, useContext, useState } from "react";

interface SoundContextValue {
  playSound: () => void;
  muteSound: () => void;
}

const SoundContext = createContext<SoundContextValue>({
  playSound: () => {
    console.warn("this is default provider");
  },
  muteSound: () => {
    console.warn("this is default provider");
  },
});

interface Props {
  children: ReactNode;
}

function SoundProvider({ children }: Props) {
  const playSound = () => {
    //TODO: Play sound
    console.log("sound is playing");
  };

  const muteSound = () => {
    // TODO: Mute sound
  };

  return <SoundContext.Provider value={{ playSound, muteSound }}>{children}</SoundContext.Provider>;
}

export const useSound = () => useContext(SoundContext);

export default SoundProvider;
