import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useLocalStorage = () => {
  const [value, setValue] = useState<string | null>(null);

  const setItem = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
      setValue(value);
    } catch (error) {
      console.log(error);
    }
  };

  const getItem = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      setValue(value);
      return value;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const removeItem = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
      setValue(null);
    } catch (error) {
      console.log(error);
    }
  };

  return { value, setItem, getItem, removeItem };
};
