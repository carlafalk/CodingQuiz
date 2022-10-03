import { AvatarProps } from "react-native-bigheads";
import { GameSessionModel } from "./GameSessionModel";

export interface User {
    id: string,
    username: string,
    avatar: AvatarProps
    gameSessions: GameSessionModel[];
}