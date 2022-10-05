import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParams } from "../App";
import Background from "../Components/Background";
import LeaderboardCard from "../Components/LeaderboardCard";
import TopSection from "../Components/TopSection";

type Props = NativeStackScreenProps<RootStackParams, "Leaderboard">;

const LeaderboardScreen = ({ navigation }: Props) => {
  return (
    <Background dark>
      <TopSection onPress={() => navigation.goBack()} title={"leaderboard"} />
      <LeaderboardCard />
    </Background>
  );
};

export default LeaderboardScreen;
