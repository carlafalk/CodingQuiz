import { Image } from "react-native";
import { BigHead } from "react-native-bigheads";

export interface User {
    username: string,
    avatar: typeof BigHead
}