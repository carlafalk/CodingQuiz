import * as Haptics from "expo-haptics";
import { createContext, ReactNode, useContext } from "react";
import useAsyncStorage from "../hooks/useAsyncStorage";

interface HapticsContextValue {
  standardButtonHaptics: () => void;
  isHapticsDisabled: boolean;
  setIsHapticsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  toggleHapticsIsDisabled: () => void;
  hapticsSuccess: () => void;
}

const HapticsContext = createContext<HapticsContextValue>({
  standardButtonHaptics: () => {},
  isHapticsDisabled: false,
  setIsHapticsDisabled: () => {},
  toggleHapticsIsDisabled: () => {},
  hapticsSuccess: () => console.warn("no provider found"),
});

interface Props {
  children: ReactNode;
}

function HapticsProvider({ children }: Props) {
  const [isHapticsDisabled, setIsHapticsDisabled] = useAsyncStorage<boolean>("haptics", false);

  const standardButtonHaptics = async () => {
    if (!isHapticsDisabled) {
      await Haptics.selectionAsync();
    }
  };

  const hapticsSuccess = async () => {
    if (!isHapticsDisabled) {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
  };

  const toggleHapticsIsDisabled = () => {
    if (!isHapticsDisabled) {
      setIsHapticsDisabled(true);
    }
    if (isHapticsDisabled) {
      setIsHapticsDisabled(false);
    }
  };

  return (
    <HapticsContext.Provider value={{ standardButtonHaptics, hapticsSuccess, isHapticsDisabled, setIsHapticsDisabled, toggleHapticsIsDisabled }}>
      {children}
    </HapticsContext.Provider>
  );
}

export const useHaptics = () => useContext(HapticsContext);

export default HapticsProvider;
