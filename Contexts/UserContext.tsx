import { createContext, ReactNode, useContext } from "react";
import useAsyncStorage from "../hooks/useAsyncStorage";
import { GameSessionModel } from "../models/GameSessionModel";
import { User } from "../models/User";
import { buildAchievement } from "../utils/AchievementBuilder";

interface UserContext {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  createUser: (user: User) => void;
  editUser: (user: User) => void;
  users: User[];
  deleteUser: (user: User) => void;
  currentUser: User | undefined;
  loginUser: (user: User) => void;
  logOutUser: () => void;
  addGameSession: (gameSession: GameSessionModel) => void;
  mostPlayedCategory: () => string;
  totalPoints: () => number;
  updateAchievements: () => void;
}

const UserContext = createContext<UserContext>({
  users: [],
  currentUser: {} as User,
  setUsers: () => console.warn("No provider found."),
  loginUser: () => console.warn("No provider found."),
  logOutUser: () => console.warn("No provider found."),
  createUser: () => console.warn("No provider found."),
  editUser: () => console.warn("No provider found."),
  deleteUser: (user: User) => console.warn("No provider found."),
  addGameSession: (gameSession: GameSessionModel) => {
    console.warn("No provider found.");
  },
  mostPlayedCategory: () => "",
  totalPoints: () => 0,
  updateAchievements: () => console.warn("No provider found."),
});

interface Props {
  children: ReactNode;
}

function UserProvider({ children }: Props) {
  const [users, setUsers, isLoaded] = useAsyncStorage<User[]>("newUsers", []);
  const [currentUser, setCurrentUser] = useAsyncStorage<User | undefined>("current-user-test", undefined);

  const loginUser = (user: User) => {
    if (user) {
      updateAchievements();
      setCurrentUser(user);
    }
  };

  const mostPlayedCategory = () => {
    if (currentUser) {
      if (currentUser.gameSessions.length > 0) {
        const gameSessionCopy = { ...currentUser };
        const mostPlayed = gameSessionCopy.gameSessions.sort(
          (a, b) =>
            currentUser.gameSessions.filter((v) => v.category === a.category).length -
            currentUser.gameSessions.filter((v) => v.category === b.category).length
        );
        return mostPlayed[mostPlayed.length - 1].category;
      } else return "N/A";
    } else return "N/A";
  };

  const totalPoints = () => {
    // use reduce instead
    if (currentUser) {
      let totalPoints = 0;
      currentUser.gameSessions.forEach((gameSession) => (totalPoints += gameSession.points));
      return totalPoints;
    } else return 0;
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

  const addGameSession = (gameSession: GameSessionModel) => {
    if (currentUser) {
      const currentUserCopy = {
        ...currentUser,
        gameSessions: [...currentUser.gameSessions, gameSession],
      };
      setCurrentUser(currentUserCopy);

      const usersCopy = [...users];

      const currentUserIndex = usersCopy.findIndex((user) => user.id === currentUser.id);
      usersCopy.splice(currentUserIndex, 1, currentUserCopy);

      setUsers(usersCopy);
    }
  };

  const updateAchievements = () => {
    if (currentUser) {
      const currentUserCopy = { ...currentUser, gameSessions: [...currentUser.gameSessions], achievements: [...currentUser.achievements] };

      buildAchievement(currentUserCopy);

      setCurrentUser(currentUserCopy);

      const usersCopy = [...users];

      const currentUserIndex = usersCopy.findIndex((user) => user.id === currentUser.id);
      usersCopy.splice(currentUserIndex, 1, currentUserCopy);

      setUsers(usersCopy);
    }
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
    <UserContext.Provider
      value={{
        editUser,
        setUsers,
        users,
        createUser,
        deleteUser,
        currentUser,
        loginUser,
        logOutUser,
        addGameSession,
        mostPlayedCategory,
        totalPoints,
        updateAchievements,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);

export default UserProvider;
