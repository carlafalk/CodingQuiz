import { createContext, ReactNode, useContext } from "react";
import uuid from "react-native-uuid";
import { defaultAvatar } from "../data/avatarData";
import useAsyncStorage from "../hooks/useAsyncStorage";
import { User } from "../models/User";

interface UserContext {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  createUser: (user: User) => void;
  editUser: (user: User) => void;
  users: User[];
  deleteUser: (user: User) => void;
  currentUser: User | undefined;
  loginUser: (user: User) => void;
  logOutUser: () => void;
}

const UserContext = createContext<UserContext>({
  users: [],
  currentUser: {} as User,
  setUsers: () => console.warn("No provider found."),
  loginUser: () => console.warn("No provider found."),
  logOutUser: () => console.warn("No provider found."),
  createUser: () => console.warn("No provider found."),
  editUser: () => console.warn("No provider found."),
  deleteUser: (user: User) => console.warn("no provider found."),
});

interface Props {
  children: ReactNode;
}

const guest: User = {
  id: uuid.v4() as string,
  username: "guest123",
  avatar: defaultAvatar,
};

function UserProvider({ children }: Props) {
  const [users, setUsers, isLoaded] = useAsyncStorage<User[]>("newUsers", [guest]);
  const [currentUser, setCurrentUser] = useAsyncStorage<User | undefined>("current-user-test", undefined);

  const loginUser = (user: User) => {
    if (user) {
      setCurrentUser(user);
    }
  };

  const logOutUser = () => {
    setCurrentUser(undefined);
  };

  const createUser = (user: User) => {
    const usersCopy = [...users];
    usersCopy.push(user);
    setUsers(usersCopy);
    loginUser(user);
  };

  const editUser = (user: User) => {
    const userIndex = users.findIndex((x) => x.id === user.id);
    const usersCopy = [...users];
    usersCopy[userIndex] = user;
    setUsers(usersCopy);
    setCurrentUser(user);
  };

  const deleteUser = (user: User) => {
    const userIndex = users.findIndex((x) => x.username === user.username);
    if (userIndex !== -1) {
      const usersCopy = [...users];
      usersCopy.splice(userIndex, 1);
      setUsers(usersCopy);
    }
    setCurrentUser(undefined);
  };

  return (
    <UserContext.Provider value={{ editUser, setUsers, users, createUser, deleteUser, currentUser, loginUser, logOutUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);

export default UserProvider;
