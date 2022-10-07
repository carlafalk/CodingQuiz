import React, { createContext, ReactNode, useContext } from "react";
import { Vibration } from "react-native";
import useAsyncStorage from "../hooks/useAsyncStorage";

interface VibrationContext {
  toggleIsVibrationsDisabled: () => void;
  gameCompleteVibration: () => void;
  isVibrationsDisabled: boolean;
}

const VibrationContext = createContext<VibrationContext>({
  gameCompleteVibration: () => console.warn("no provider found."),
  toggleIsVibrationsDisabled: () => console.warn("no provider found"),
  isVibrationsDisabled: false,
});

interface Props {
  children: ReactNode;
}

const VibrationsProvider = ({ children }: Props) => {
  const [isVibrationsDisabled, setIsVibrationsDisabled] = useAsyncStorage<boolean>("Vibrations-settings", false);

  const ONE_SECOND_IN_MS = 1000;

  const gameIsCompletePattern = [0.1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS, 0.1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS];

  const gameCompleteVibration = () => {
    if (!isVibrationsDisabled) {
      Vibration.vibrate(gameIsCompletePattern);
    }
  };

  const toggleIsVibrationsDisabled = () => {
    !isVibrationsDisabled ? setIsVibrationsDisabled(true) : setIsVibrationsDisabled(false);
  };

  return (
    <VibrationContext.Provider value={{ gameCompleteVibration, toggleIsVibrationsDisabled, isVibrationsDisabled }}>
      {children}
    </VibrationContext.Provider>
  );
};

export const useVibrations = () => useContext(VibrationContext);

export default VibrationsProvider;
