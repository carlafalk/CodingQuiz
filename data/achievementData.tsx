import logo from "../assets/icon.png";
import { AchievementModel } from "../models/AchievementModel";

const achievementData: AchievementModel[] = [
  {
    title: "Hello world",
    desc: "Play 1 game",
    imageURL: logo,
  },
  {
    title: "No-lifer",
    desc: "Play 10 games",
    imageURL: logo,
    objective: 10,
  },
  {
    title: "Score!!1",
    desc: "Earn 100 points",
    imageURL: logo,
    objective: 100,
  },
  {
    title: "I like all dem flavors",
    desc: "Play a game in each category",
    imageURL: logo,
    objective: 5,
  },
  {
    title: "If in doubt, AFK out",
    desc: "Play a game without answering anything",
    imageURL: logo,
  },
  {
    title: "Quickdraw",
    desc: "Answer a question within 1 second",
    imageURL: logo,
  },
];

export default achievementData;
