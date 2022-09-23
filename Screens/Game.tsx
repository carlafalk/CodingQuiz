import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParams } from "../App";
import quizItems from "../data/QuestionsData";
import QuizItem from "../models/QuizItem";

type Props = NativeStackScreenProps<RootStackParams, "Game">;

const GameScreen = ({ navigation, route }: Props) => {
  const placeholder = quizItems.find((item) => item.category === route.params.category);

  const [questions, setQuestions] = useState<QuizItem[]>([]);

  useEffect(() => {
    const randomQuestions = () => {
      const filteredQuestions = quizItems.filter((item) => item.category === route.params.category);
      const shuffledQuestions = filteredQuestions.sort(() => 0.5 - Math.random());

      return shuffledQuestions.slice(0, 10);
    };
    setQuestions(randomQuestions);
  }, []);

  return (
    <View>
      <Text>{questions[0].question}</Text>
      <Text>{questions[0].answers[0].answer}</Text>
      <Text>{questions[0].answers[1].answer}</Text>
      <Text>{questions[0].answers[2].answer}</Text>
      <Text>{questions[0].answers[3].answer}</Text>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({});
