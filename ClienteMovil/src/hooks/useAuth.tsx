import { useEffect } from "react";

import { useUser } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";

import { User } from "../domain/user/User.interface";

export const useAuth = (): {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
} => {
  const { user, addUser, removeUser } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const fetchStoredUser = async () => {
      const storedUser = await getItem("user");

      if (storedUser) {
        const parsedUser: User = JSON.parse(storedUser);
        addUser(parsedUser);
      }
    };

    fetchStoredUser();
  }, []);

  const login = (user: User): void => {
    addUser(user);
  };

  const logout = (): void => {
    removeUser();
  };

  return { user, login, logout };
};
