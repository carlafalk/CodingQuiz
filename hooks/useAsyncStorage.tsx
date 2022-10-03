import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const useAsyncStorage = <T,>(key: string, initialValue: T) => {
  const [state, setState] = useState(initialValue);
  const [isLoaded, setIsLoaded] = useState(false);

  async function pullFromStorage() {
    try {
      const fromStorage = await AsyncStorage.getItem(key);
      let value = initialValue;
      if (fromStorage) {
        value = JSON.parse(fromStorage);
      }
      setState(value);
      setIsLoaded(true);
    } catch (e) {
      console.log(e);
    }
  }

  async function updateStorage(newValue: T) {
    setState(newValue);
    const stringifiedValue = JSON.stringify(newValue);

    if (newValue === undefined) {
      AsyncStorage.removeItem(key);
    } else {
      await AsyncStorage.setItem(key, stringifiedValue);
    }
  }

  useEffect(() => {
    pullFromStorage();
  }, []);

  return [state, updateStorage, isLoaded] as [T, typeof setState, boolean];
};

export default useAsyncStorage;
