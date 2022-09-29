import * as Haptics from "expo-haptics";
import { createContext, ReactNode, useContext } from "react";
import useAsyncStorage from "../hooks/useAsyncStorage";

interface HapticsContextValue {
  standardButtonHaptics: () => void;
  isHapticsDisabled: boolean;
  setIsHapticsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  toggleHapticsIsDisabled: () => void;
}

const HapticsContext = createContext<HapticsContextValue>({
  standardButtonHaptics: () => {},
  isHapticsDisabled: false,
  setIsHapticsDisabled: () => {},
  toggleHapticsIsDisabled: () => {},
});

interface Props {
  children: ReactNode;
}

function HapticsProvider({ children }: Props) {
  const [isHapticsDisabled, setIsHapticsDisabled] = useAsyncStorage<boolean>("haptics", false);

  const standardButtonHaptics = async () => {
    if (!isHapticsDisabled) {
      await Haptics.selectionAsync();
      console.log("selection haptics brrrr");
    }
  };

  const toggleHapticsIsDisabled = () => {
    if (!isHapticsDisabled) {
      setIsHapticsDisabled(true);
    }
    if (isHapticsDisabled) {
      setIsHapticsDisabled(false);
    }
    console.log("haptics disabled: " + isHapticsDisabled);
  };

  return (
    <HapticsContext.Provider value={{ standardButtonHaptics, isHapticsDisabled, setIsHapticsDisabled, toggleHapticsIsDisabled }}>
      {children}
    </HapticsContext.Provider>
  );
}

export const useHaptics = () => useContext(HapticsContext);

export default HapticsProvider;
