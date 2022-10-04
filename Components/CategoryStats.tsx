import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";
import CSSImg from "../assets/languageIcons/css-3.png";
import HTMLImg from "../assets/languageIcons/html-5.png";
import JSImg from "../assets/languageIcons/js.png";
import ReactImg from "../assets/languageIcons/react.png";
import TSImg from "../assets/languageIcons/typescript.png";
import { useTheme } from "../contexts/ThemeContext";
import { useUser } from "../contexts/UserContext";
import STMText from "./Texts/ShareTechMonoText";

interface Props {
  category: "react" | "html" | "css" | "javascript" | "typescript";
}

const CategoryStats = ({ category }: Props) => {
  const [categoryImg, setCategoryImg] = useState();
  const [categoryColor, setCategoryColor] = useState("");
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const { currentUser } = useUser();

  const { themeColors } = useTheme();

  useEffect(() => {
    if (currentUser) {
      setGamesPlayed(currentUser.gameSessions.filter((gameSession) => gameSession.category === category).length);
      setCorrectAnswers(
        currentUser.gameSessions.filter((gameSession) => gameSession.category === category).reduce((acc, cur) => acc + cur.points, 0)
      );
    }
  }, []);

  useEffect(() => {
    if (category === "html") {
      setCategoryImg(HTMLImg);
      setCategoryColor(themeColors.categories.html);
    } else if (category === "css") {
      setCategoryImg(CSSImg);
      setCategoryColor(themeColors.categories.css);
    } else if (category === "react") {
      setCategoryImg(ReactImg);
      setCategoryColor(themeColors.categories.react);
    } else if (category === "javascript") {
      setCategoryImg(JSImg);
      setCategoryColor(themeColors.categories.javaScript);
    } else if (category === "typescript") {
      setCategoryImg(TSImg);
      setCategoryColor(themeColors.categories.typeScript);
    }
  }, []);

  return (
    <View style={{ marginBottom: 10 }}>
      <Image
        source={categoryImg as any}
        style={{ width: 35, height: 35, alignSelf: "center", overflow: "visible", zIndex: 100, marginBottom: -20 }}
      />
      <View style={{ backgroundColor: categoryColor, position: "relative", borderRadius: 5, padding: 5 }}>
        <View style={{ marginTop: 20 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <STMText size={11} uppercase>
              Games played
            </STMText>
            <STMText size={11}>{gamesPlayed}</STMText>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <STMText size={11} uppercase>
              Correct answers
            </STMText>
            <STMText size={11}>{correctAnswers}</STMText>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <STMText size={11} uppercase>
              Rights / Quiz
            </STMText>
            <STMText size={11}>{gamesPlayed > 0 && Number(((gamesPlayed / correctAnswers) * 10).toFixed(2))}</STMText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CategoryStats;
