import logo from "../assets/icon.png";
import { AchievementModel } from "../models/AchievementModel";

const achievementData: AchievementModel[] = [
  {
    title: "Hello world",
    desc: "Play 1 game",
    isCompleted: false,
    imageURL: logo,
  },
  {
    title: "No-lifer",
    desc: "Play 10 games",
    isCompleted: false,
    imageURL: logo,
    currentProgress: 0,
    destination: 10,
  },
  {
    title: "Score!!1",
    desc: "Earn 100 points",
    isCompleted: false,
    imageURL: logo,
    currentProgress: 0,
    destination: 100,
  },
  {
    title: "I like all dem flavors",
    desc: "Play a game in each category",
    isCompleted: false,
    imageURL: logo,
    currentProgress: 0,
    destination: 4,
  },
  {
    title: "If in doubt, AFK out",
    desc: "Play a game without answering anything",
    isCompleted: false,
    imageURL: logo,
  },
  {
    title: "Quickdraw",
    desc: "Answer a question within 1 second",
    isCompleted: false,
    imageURL: logo,
  },
];

export default achievementData;
