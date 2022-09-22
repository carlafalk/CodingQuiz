import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackParams } from "../App";
import logo from "../assets/Images/logo.png";
import { colors } from "../Styles/Shared";

type HomeNavigationProps = NativeStackScreenProps<RootStackParams>;

const HomeScreen = ({ navigation }: HomeNavigationProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
          <View style={[styles.playButton, styles.elevation]}>
            <Text>Play</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <View style={[styles.settingsButton, styles.elevation]}>
            <Text>Settings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("About")}>
          <View style={[styles.aboutButton, styles.elevation]}>
            <Text>About</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    marginTop: 96,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "30%",
  },
  logo: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
  buttonContainer: {
    marginTop: 48,
  },
  playButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `${colors.lightGreen}`,
    borderRadius: 14,
    marginHorizontal: 100,
    marginBottom: 24,
    paddingVertical: 16,
  },
  settingsButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `${colors.mustard}`,
    borderRadius: 14,
    marginHorizontal: 100,
    marginBottom: 24,
    paddingVertical: 16,
  },
  aboutButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `${colors.lightPurple}`,
    borderRadius: 14,
    marginHorizontal: 100,
    marginBottom: 24,
    paddingVertical: 16,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  elevation: {
    elevation: 8,
    shadowColor: "#171717",
  },
});
