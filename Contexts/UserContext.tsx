import { createContext, ReactNode, useContext } from "react";
import { defaultAvatar } from "../data/avatarData";
import useAsyncStorage from "../hooks/useAsyncStorage";
import { User } from "../models/User";

interface UserContext {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  createUser: (user: User) => void;
  editUser: () => void;
  users: User[];
}

const UserContext = createContext<UserContext>({
  setUsers: () => {
    console.warn("No provider found.");
  },
  createUser: () => {
    console.warn("No provider found.");
  },
  editUser: () => {
    console.warn("No provider found.");
  },
  users: [],
});

interface Props {
  children: ReactNode;
}

const guest: User = {
  username: "guest123",
  avatar: defaultAvatar,
};

function UserProvider({ children }: Props) {
  const [users, setUsers, isLoaded] = useAsyncStorage<User[]>("newUsers", [guest]);

  const createUser = (user: User) => {
    const usersCopy = [...users];
    usersCopy.push(user);
    setUsers(usersCopy);
  };

  const editUser = () => {
    console.log("edit user");
  };
  return <UserContext.Provider value={{ editUser, setUsers, users, createUser }}>{children}</UserContext.Provider>;
}

export const useUser = () => useContext(UserContext);

export default UserProvider;
