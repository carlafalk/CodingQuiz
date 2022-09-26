import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect } from "react";
import SoundProvider from "./contexts/SoundContext";

import { ThemeProvider } from "./contexts/ThemeContext";
import AboutScreen from "./Screens/About";
import CategoriesScreen from "./Screens/Categories";
import GameScreen from "./Screens/Game";
import GameOverScreen from "./Screens/GameOver";
import GetReadyScreen from "./Screens/GetReady";
import HomeScreen from "./Screens/Home";
import SettingsScreen from "./Screens/Settings";

export type RootStackParams = {
  Home: undefined;
  About: undefined;
  Categories: undefined;
  Settings: undefined;
  GetReady: { category: string };
  Game: { category: string };
  GameOver: { points: number; category: string; answerTimes: number[] };
};

const RootStack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  const [fontsLoaded] = useFonts({
    ShareTechMono: require("./assets/fonts/ShareTechMono-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <SoundProvider>
        <NavigationContainer onReady={onLayoutRootView}>
          <RootStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, animation: "fade" }}>
            <RootStack.Screen name="Home" component={HomeScreen} />
            <RootStack.Screen name="About" component={AboutScreen} />
            <RootStack.Screen name="Categories" component={CategoriesScreen} />
            <RootStack.Screen name="Settings" component={SettingsScreen} />
            <RootStack.Screen name="Game" component={GameScreen} />
            <RootStack.Screen name="GameOver" component={GameOverScreen} />
            <RootStack.Screen name="GetReady" component={GetReadyScreen} />
          </RootStack.Navigator>
        </NavigationContainer>
      </SoundProvider>
    </ThemeProvider>
  );
}
