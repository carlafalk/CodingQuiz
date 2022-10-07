import { Image } from "react-native-svg";

export interface AchievementModel {
    title: string;
    desc: string;
    imageURL: Image;
    objective?: number;
}