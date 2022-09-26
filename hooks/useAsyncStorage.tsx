import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export async function useAsyncStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    AsyncStorage.getItem(key).then((data) => {
      if (data !== null) {
        return JSON.parse(data);
      }
    });

    if (typeof initialValue === "function") {
      return (initialValue as () => T)();
    } else return initialValue;
  });

  useEffect(() => {
    try {
      const jsonValue = JSON.stringify(value);
      AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.warn(e);
    }
  }, []);

  return [value, setValue] as [T, typeof setValue];
}

export default useAsyncStorage;
