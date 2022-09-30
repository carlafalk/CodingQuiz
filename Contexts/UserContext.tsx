import { createContext, ReactNode, useContext } from "react";
import { BigHead } from "react-native-bigheads";
import useAsyncStorage from "../hooks/useAsyncStorage";
import { User } from "../models/User";

interface UserContext {
  addUser: () => void;
  editUser: () => void;
}

const UserContext = createContext<UserContext>({
  addUser: () => {
    console.log("Added user");
  },
  editUser: () => {
    console.log("Edited user");
  },
});

interface Props {
  children: ReactNode;
}

const guest = {
  username: "guest123",
  avatar: BigHead,
};

function UserProvider({ children }: Props) {
  const [user, setUser, isLoaded] = useAsyncStorage<User>("user", guest);
  const addUser = () => {
    console.log("Added user");
  };
  const editUser = () => {
    console.log("Added user");
  };
  return <UserContext.Provider value={{ addUser, editUser }}>{children}</UserContext.Provider>;
}

export const useUser = () => useContext(UserContext);

export default UserProvider;
