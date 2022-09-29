import { Octicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { AvatarProps, BigHead } from "react-native-bigheads";
import { useTheme } from "../../contexts/ThemeContext";
import { LgText } from "../../Styles/texts";

const AvatarCreator = () => {
  const [selectedProp, setSelectedProp] = useState<keyof AvatarProps>("accessory");
  let defaultAvatar: AvatarProps = {
    accessory: "none",
    bgColor: "purple",
    bgShape: "squircle",
    body: "chest",
    clothing: "shirt",
    clothingColor: "black",
    eyebrows: "concerned",
    eyes: "leftTwitch",
    facialHair: "none",
    graphic: "react",
    hair: "balding",
    hairColor: "blue",
    hat: "none",
    hatColor: "green",
    lashes: false,
    lipColor: "purple",
    mouth: "vomitingRainbow",
    showBackground: true,
    size: 200,
    skinTone: "light",
  };
  const [avatar, setAvatar] = useState<AvatarProps>(defaultAvatar);
  const [selectedValue, setSelectedValue] = useState<any>(avatar[selectedProp]);
  const { themeColors } = useTheme();
  useEffect(() => {
    setAvatarPropValue();
  }, [selectedValue]);
  const avatarProps = {
    accessory: ["none", "roundGlasses", "tinyGlasses", "shades", "faceMask", "hoopEarrings"],
    bgColor: ["purple", "blue", "green", "red", "orange", "yellow", "turqoise", "pink"],
    bgShape: ["squircle", "circle", "square"],
    body: ["chest", "breasts"],
    clothing: ["shirt", "naked", "dressShirt", "vneck", "tankTop", "dress", "denimJacket", "hoodie", "chequeredShirt", "chequeredShirtDark"],
    clothingColor: ["blue", "green", "red", "black", "white"],
    eyebrows: ["concerned", "raised", "leftLowered", "serious", "angry"],
    eyes: [
      "leftTwitch",
      "normal",
      "happy",
      "content",
      "squint",
      "simple",
      "dizzy",
      "wink",
      "hearts",
      "crazy",
      "cute",
      "dollars",
      "stars",
      "cyborg",
      "simplePatch",
      "piratePatch",
    ],
    facialHair: ["none", "none2", "none3", "stubble", "mediumBeard", "goatee"],
    graphic: ["none", "react", "redwood", "gatsby", "vue", "graphQL", "donut", "rainbow"],
    hair: ["none", "balding", "long", "bun", "short", "pixie", "buzz", "afro", "bob", "mohawk"],
    hairColor: ["blue", "orange", "pink", "black", "white", "blonde", "brown"],
    hat: ["none", "none2", "none3", "none4", "none5", "beanie", "turban", "party", "hijab"],
    hatColor: ["white", "blue", "green", "red", "black"],
    // lashes: [true, false],
    lipColor: ["purple", "green", "red", "turqoise", "pink"],
    mouth: ["serious", "vomitingRainbow", "grin", "sad", "openSmile", "lips", "open", "tongue", "piercedTongue"],
    // showBackground: [true, false],
    // size: 200,
    skinTone: ["red", "yellow", "black", "brown", "light", "dark"],
  };

  const anotherArray = [
    "accessory",
    "bgColor",
    "bgShape",
    "body",
    "clothing",
    "clothingColor",
    "eyebrows",
    "eyes",
    "facialHair",
    "graphic",
    "hair",
    "hairColor",
    "hat",
    "hatColor",
    // "lashes",
    "lipColor",
    "mouth",
    // "showBackground",
    // "size",
    "skinTone",
  ];

  const incrementProp = () => {
    const propIndex = anotherArray.indexOf(selectedProp);
    if (propIndex === anotherArray.length - 1) {
      setSelectedProp(anotherArray[0] as keyof AvatarProps);
    } else {
      setSelectedProp(anotherArray[propIndex + 1] as keyof AvatarProps);
    }
  };
  const decrementProp = () => {
    const propIndex = anotherArray.indexOf(selectedProp);
    if (propIndex === 0) {
      setSelectedProp(anotherArray[anotherArray.length - 1] as keyof AvatarProps);
    } else {
      setSelectedProp(anotherArray[propIndex - 1] as keyof AvatarProps);
    }
  };

  const setAvatarPropValue = () => {
    setAvatar((prev) => {
      return { ...prev, [selectedProp]: selectedValue as string };
    });
  };

  const incrementIndexOfValuePropArray = () => {
    const currentValue = selectedProp as keyof typeof avatarProps;
    const currentPropValue = avatarProps[currentValue];
    const propIndex = currentPropValue.indexOf(selectedValue as string);
    setSelectedValue(currentPropValue[propIndex + 1]);
  };

  return (
    <>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity onPress={decrementProp}>
          <Octicons name="chevron-up" size={24} color={themeColors.commons.white} />
        </TouchableOpacity>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => incrementIndexOfValuePropArray()}>
            <Octicons name="chevron-left" size={24} color={themeColors.commons.white} />
          </TouchableOpacity>

          <BigHead {...avatar} />

          {/* <BigHead bgColor="purple" bgShape="squircle" showBackground={true} size={200} /> */}
          <TouchableOpacity onPress={() => setSelectedProp("hatColor")}>
            <Octicons name="chevron-right" size={24} color={themeColors.commons.white} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{ marginTop: 40 }} onPress={incrementProp}>
          <Octicons name="chevron-down" size={24} color={themeColors.commons.white} />
        </TouchableOpacity>
        <LgText>{selectedProp}</LgText>
      </View>
    </>
  );
};

export default AvatarCreator;
