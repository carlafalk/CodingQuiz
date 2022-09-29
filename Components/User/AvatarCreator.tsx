import { Octicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { AvatarProps, BigHead } from "react-native-bigheads";
import { useTheme } from "../../contexts/ThemeContext";
import { avatarProps, avatarPropsArray, defaultAvatar, mapAvatarValues } from "../../data/avatarData";
import { LgText, MdText } from "../../Styles/texts";

const AvatarCreator = () => {
  const [selectedProp, setSelectedProp] = useState<keyof AvatarProps>("accessory");
  const [avatar, setAvatar] = useState<AvatarProps>(defaultAvatar);
  const [selectedValue, setSelectedValue] = useState<any>(avatar[selectedProp]);
  const { themeColors } = useTheme();

  useEffect(() => {
    setAvatarPropValue();
    console.log(avatar);
  }, [selectedValue]);

  useEffect(() => {
    setSelectedValue(avatar[selectedProp]);
  }, [selectedProp]);

  const incrementProp = () => {
    const propIndex = avatarPropsArray.indexOf(selectedProp);
    if (propIndex === avatarPropsArray.length - 1) {
      setSelectedProp(avatarPropsArray[0] as keyof AvatarProps);
    } else {
      setSelectedProp(avatarPropsArray[propIndex + 1] as keyof AvatarProps);
    }
  };
  const decrementProp = () => {
    const propIndex = avatarPropsArray.indexOf(selectedProp);
    if (propIndex === 0) {
      setSelectedProp(avatarPropsArray[avatarPropsArray.length - 1] as keyof AvatarProps);
    } else {
      setSelectedProp(avatarPropsArray[propIndex - 1] as keyof AvatarProps);
    }
  };

  const setAvatarPropValue = () => {
    setAvatar((prev) => {
      return { ...prev, [selectedProp]: selectedValue as string };
    });
  };

  const incrementIndexOfValuePropArray = () => {
    const currentProp = selectedProp as keyof typeof avatarProps;
    const currentPropValueArray = avatarProps[currentProp];
    const propIndex = currentPropValueArray.indexOf(selectedValue as string);
    if (propIndex === currentPropValueArray.length - 1) {
      setSelectedValue(currentPropValueArray[0]);
    } else {
      setSelectedValue(currentPropValueArray[propIndex + 1]);
    }
  };

  const decrementIndexOfValuePropArray = () => {
    const currentProp = selectedProp as keyof typeof avatarProps;
    const currentPropValueArray = avatarProps[currentProp];
    const propIndex = currentPropValueArray.indexOf(selectedValue as string);
    if (propIndex === 0) {
      setSelectedValue(currentPropValueArray[currentPropValueArray.length - 1]);
    } else {
      setSelectedValue(currentPropValueArray[propIndex - 1]);
    }
  };

  return (
    <>
      <View style={{ alignItems: "center" }}>
        {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => decrementIndexOfValuePropArray()}>
            <Octicons name="chevron-left" size={24} color={themeColors.commons.white} />
          </TouchableOpacity>
        <LgText style={{color: themeColors.commons.white}}>{mapAvatarValues[selectedProp.toString()]}</LgText>
        <TouchableOpacity onPress={() => decrementIndexOfValuePropArray()}>
            <Octicons name="chevron-right" size={24} color={themeColors.commons.white} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => decrementIndexOfValuePropArray()}>
            <Octicons name="chevron-left" size={24} color={themeColors.commons.white} />
          </TouchableOpacity>
        <LgText style={{color: themeColors.commons.white, padding: 20}}>{mapAvatarValues[selectedProp.toString()]}</LgText>
        <TouchableOpacity onPress={() => decrementIndexOfValuePropArray()}>
            <Octicons name="chevron-right" size={24} color={themeColors.commons.white} />
          </TouchableOpacity>
        </View> */}

        {/* <TouchableOpacity onPress={decrementProp}>
          <Octicons name="chevron-up" size={24} color={themeColors.commons.white} />
        </TouchableOpacity> */}

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* <TouchableOpacity onPress={() => decrementIndexOfValuePropArray()}>
            <Octicons name="chevron-left" size={24} color={themeColors.commons.white} />
          </TouchableOpacity> */}

          <BigHead {...avatar} />
          {/* <BigHead {...avatar} size={100} /> */}

          {/* <BigHead bgColor="purple" bgShape="squircle" showBackground={true} size={200} /> */}
          {/* <TouchableOpacity onPress={() => incrementIndexOfValuePropArray()}>
            <Octicons name="chevron-right" size={24} color={themeColors.commons.white} />
          </TouchableOpacity> */}
        </View>

        {/* <TouchableOpacity style={{ marginTop: 40 }} onPress={incrementProp}>
          <Octicons name="chevron-down" size={24} color={themeColors.commons.white} />
        </TouchableOpacity> */}
        <View style={{ borderRadius: 10, borderColor: '#eeeeee32', borderWidth: 1, padding: 10, flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
        <TouchableOpacity onPress={decrementProp}>
            <Octicons name="chevron-left" size={24} color={themeColors.commons.white} />
          </TouchableOpacity>
          <View style={{ marginHorizontal: 20, width: '80%' }}>
          <LgText style={{ color: themeColors.commons.white, textAlign: 'center' }}>{mapAvatarValues[selectedProp.toString()]}</LgText>
          </View>
          <TouchableOpacity onPress={incrementProp}>
            <Octicons name="chevron-right" size={24} color={themeColors.commons.white} />
          </TouchableOpacity>
        </View>
        <View style={{ borderRadius: 10, borderColor: '#eeeeee32', borderWidth: 1, padding: 10, flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={decrementIndexOfValuePropArray}>
            <Octicons name="chevron-left" size={24} color={themeColors.commons.white} />
          </TouchableOpacity>
          <View style={{marginHorizontal: 20, width: '60%'}}>
          <MdText style={{ color: themeColors.commons.white, textAlign: 'center' }}>{selectedValue}</MdText>
          </View>
          <TouchableOpacity onPress={incrementIndexOfValuePropArray}>
            <Octicons name="chevron-right" size={24} color={themeColors.commons.white} />
          </TouchableOpacity>
      </View>
      </View>
    </>
  );
};

export default AvatarCreator;
