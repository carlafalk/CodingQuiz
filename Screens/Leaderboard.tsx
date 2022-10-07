import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParams } from "../App";
import LeaderboardCard from "../Components/Game/LeaderboardCard";
import Background from "../Components/Layout/Background";
import TopSection from "../Components/Layout/TopSection";

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
