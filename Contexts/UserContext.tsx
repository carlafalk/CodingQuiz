import { createContext, ReactNode, useContext, useState } from "react";
import { defaultAvatar } from "../data/avatarData";
import useAsyncStorage from "../hooks/useAsyncStorage";
import { User } from "../models/User";

interface UserContext {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  createUser: (user: User) => void;
  editUser: () => void;
  users: User[];
  deleteUser: (user: User) => void;
  currentUser: User | undefined;
  loginUser: (user: User) => void;
}

const UserContext = createContext<UserContext>({
  users: [],
  currentUser: {} as User,
  setUsers: () => {
    console.warn("No provider found.");
  },
  loginUser: () => console.log("No provider found."),
  createUser: () => {
    console.warn("No provider found.");
  },
  editUser: () => {
    console.warn("No provider found.");
  },
  deleteUser: (user: User) => {
    "no provider found.";
  },
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
  const [currentUser, setCurrentUser] = useState<User>();

  const loginUser = (user: User) => {
    if (user) {
      setCurrentUser(user);
    }
  };

  const createUser = (user: User) => {
    const usersCopy = [...users];
    usersCopy.push(user);
    setUsers(usersCopy);
  };

  const editUser = () => {
    console.log("edit user");
  };

  const deleteUser = (user: User) => {
    //ToDO Delete user from asyncStorage.
    const userIndex = users.findIndex((x) => x.username === user.username);
    if (userIndex !== -1) {
      const usersCopy = [...users];
      usersCopy.splice(userIndex, 1);
      setUsers(usersCopy);
    }
  };

  return (
    <UserContext.Provider value={{ editUser, setUsers, users, createUser, deleteUser, currentUser, loginUser }}>{children}</UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);

export default UserProvider;
