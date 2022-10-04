import { Image } from "react-native-svg";

export interface AchievementModel {
    title: string;
    desc: string;
    isCompleted: boolean;
    imageURL: Image;
    currentProgress?: number;
    destination?: number;
}