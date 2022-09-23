import Constants from "expo-constants";
import React, { useEffect, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { colors } from "../Styles/Shared";

const TimerBar = () => {
  const [timeLeft, setTimeLeft] = useState(100);
  const [timeIsUp, setTimeIsUp] = useState(false);
  console.log("TimerBar rendered");

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (timeLeft > 0) setTimeLeft((prev) => prev - 10);

      if (timeLeft === 0) {
        setTimeIsUp(true);
        window.clearInterval(timer);
      }
    }, 1000);

    return () => window.clearInterval(timer);
  }, [timeLeft]);

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: "#8BED4F", borderRadius: 8, width: `${timeLeft}%` }]} />
        <View style={styles.progressBarShine}></View>
        <View style={styles.progressBarClock}>
          <Text style={styles.timeLeftText}>{timeLeft / 10}</Text>
        </View>
      </View>
    </View>
  );
};

export default TimerBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 1,
  },
  progressBar: {
    justifyContent: "center",
    flexDirection: "row",
    height: 30,
    width: "80%",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 10,
    position: "relative",
  },
  progressBarShine: {
    position: "absolute",
    top: 1,
    height: 10,
    width: "98%",
    backgroundColor: "#ffffff6e",
    borderRadius: 10,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  progressBarClock: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: -15,
    right: 5,
    height: 60,
    width: 60,
    backgroundColor: colors.lightPurple,
    borderColor: colors.mustard,
    borderWidth: 5,
    borderRadius: 50,
    elevation: 5,
  },
  timeLeftText: {
    fontFamily: "ShareTechMono",
    fontSize: 20,
    color: colors.lightGreen,
  },
});
