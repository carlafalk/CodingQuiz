import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

// const useAsyncStorage = <T,>(key: string, initialValue: T): [T, (newValue: T) => void] => {
//   const [state, setState] = useState({
//     storageValue: initialValue,
//   });
//   const { storageValue } = state;

//   async function pullFromStorage() {
//     const fromStorage = await AsyncStorage.getItem(key);
//     let value = initialValue;
//     if (fromStorage) {
//       value = JSON.parse(fromStorage);
//     }
//     setState({ storageValue: value });
//   }

//   async function updateStorage(newValue: T) {
//     setState({ storageValue: newValue });
//     const stringifiedValue = JSON.stringify(newValue);
//     await AsyncStorage.setItem(key, stringifiedValue);
//   }

//   useEffect(() => {
//     pullFromStorage();
//   }, []);

//   return [storageValue, updateStorage];
// };

// export default useAsyncStorage;

export function useAsyncStorageFromWEB<T>(key: string, initialValue: T | (() => T)) {
  const [storedValue, setStoredValue] = useState<T>();

  async function getStoredItem(key: string, initialValue: T | (() => T)) {
    try {
      const item = await AsyncStorage.getItem(key);
      const value = item ? JSON.parse(item) : initialValue;
      setStoredValue(value);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getStoredItem(key, initialValue);
  }, [key, initialValue]);

  const setValue = async (value: Function) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
      // console.log(valueToStore);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue] as [T, typeof storedValue];
}

function useAsyncStorage<T>(key: string, initialValue: T | (() => T)) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    async () => {
      await AsyncStorage.getItem(key).then((value) => {
        if (value !== null) {
          console.log(value);
          return JSON.parse(value);
        }
      });
    };

    if (typeof initialValue === "function") {
      return (initialValue as () => T)();
    } else {
      // console.log("else initial " + initialValue);
      return initialValue;
    }
  });

  useEffect(() => {
    async () => {
      try {
        const jsonValue = JSON.stringify(storedValue);
        await AsyncStorage.setItem(key, jsonValue);
        console.log(jsonValue);
      } catch (e) {
        console.warn(e);
      }
    };
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as [T, typeof setStoredValue];
}
export default useAsyncStorage;
