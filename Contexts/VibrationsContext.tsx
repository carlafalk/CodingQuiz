import React, { createContext, ReactNode, useContext, useState } from "react";

interface VibrationContext {
  gameCompleteVibration: () => void;
}

const VibrationContext = createContext<VibrationContext>({
  gameCompleteVibration: () => console.warn("no provider found."),
});

interface Props {
  children: ReactNode;
}

const VibrationsProvider = ({ children }: Props) => {
  const [isVibrationDisabled, setIsVibrationDisabled] = useState();

  const gameCompleteVibration = () => {
    //TODO: Vibrate!!
    console.log("BRRBRbRR");
  };

  return <VibrationContext.Provider value={{ gameCompleteVibration }}>{children}</VibrationContext.Provider>;
};

export const useVibrations = () => useContext(VibrationContext);

export default VibrationsProvider;
