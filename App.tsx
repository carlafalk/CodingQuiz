import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect } from "react";
import HapticsProvider from "./contexts/HapticsContext";
import SoundProvider from "./contexts/SoundContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import UserProvider from "./contexts/UserContext";
import VibrationsProvider from "./contexts/VibrationsContext";
import AboutScreen from "./Screens/About";
import CategoriesScreen from "./Screens/Categories";
import GameScreen from "./Screens/Game";
import HomeScreen from "./Screens/Home";
import LeaderboardScreen from "./Screens/Leaderboard";
import LogInScreen from "./Screens/LogIn";
import SettingsScreen from "./Screens/Settings";
// import UserScreen from "./Screens/UserScreen";

// { loggedIn: boolean; user: User };

export type RootStackParams = {
  Home: undefined;
  About: undefined;
  LogIn: undefined;
  User: undefined;
  Categories: undefined;
  Settings: undefined;
  Game: { category: string };
  Leaderboard: undefined;
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
    <UserProvider>
      <ThemeProvider>
        <HapticsProvider>
          <VibrationsProvider>
            <SoundProvider>
              <NavigationContainer onReady={onLayoutRootView}>
                <RootStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, animation: "fade" }}>
                  <RootStack.Screen name="Home" component={HomeScreen} />
                  <RootStack.Screen name="About" component={AboutScreen} />
                  <RootStack.Screen name="LogIn" component={LogInScreen} />
                  <RootStack.Screen name="Categories" component={CategoriesScreen} />
                  <RootStack.Screen name="Settings" component={SettingsScreen} />
                  <RootStack.Screen name="Game" component={GameScreen} options={{ gestureEnabled: false }} />
                  <RootStack.Screen name="Leaderboard" component={LeaderboardScreen} />
                </RootStack.Navigator>
              </NavigationContainer>
            </SoundProvider>
          </VibrationsProvider>
        </HapticsProvider>
      </ThemeProvider>
    </UserProvider>
  );
}
