import { Octicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { AvatarProps, BigHead } from "react-native-bigheads";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";
import { avatarProps, avatarPropsArray, defaultAvatar, mapAvatarValues } from "../../data/avatarData";
import { LgText, MdText } from "../../Styles/texts";

interface Props {
  avatarRef: React.MutableRefObject<AvatarProps>
}

const AvatarCreator = ({ avatarRef }: Props) => {
  const [selectedProp, setSelectedProp] = useState<keyof AvatarProps>("accessory");
  const [avatar, setAvatar] = useState<AvatarProps>(defaultAvatar);
  const [selectedValue, setSelectedValue] = useState<any>(avatar[selectedProp]);
  const { themeColors } = useTheme();

  useEffect(() => {
    avatarRef.current = avatar;
  }, [avatar])
  useEffect(() => {
    setAvatarPropValue();
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
        <View>
          <BigHead {...avatar} />
        </View>

        <AvatarInfoContainer>
          <ArrowButton onPress={decrementProp}>
            <Octicons name="chevron-left" size={32} color={themeColors.commons.white} />
          </ArrowButton>
          <AvatarInfo
            onTouchStart={(e: any) => (e.touchX = e.nativeEvent.pageX)}

            onTouchMove={(e: any) => {
              if (e.touchX - e.nativeEvent.pageX > 20) {
                setTimeout(() => {
                  incrementProp();
                }, 250);
              }

              if (e.touchX - e.nativeEvent.pageX < 20) {
                setTimeout(() => {
                  decrementProp();
                }, 250);
              }
            }}
          >
            <LgText style={{ color: themeColors.commons.white, textAlign: "center" }}>{mapAvatarValues[selectedProp.toString()]}</LgText>
          </AvatarInfo>
          <ArrowButton onPress={incrementProp}>
            <Octicons name="chevron-right" size={32} color={themeColors.commons.white} />
          </ArrowButton>
        </AvatarInfoContainer>
        <AvatarInfoContainer>
          <ArrowButton onPress={decrementIndexOfValuePropArray}>
            <Octicons name="chevron-left" size={24} color={themeColors.commons.white} />
          </ArrowButton>
          <AvatarSmallInfo
            onTouchStart={(e: any) => (e.touchX = e.nativeEvent.pageX)}

            onTouchMove={(e: any) => {
              if (e.touchX - e.nativeEvent.pageX > 20) {
                setTimeout(() => {
                  incrementIndexOfValuePropArray();
                }, 250);
              }

              if (e.touchX - e.nativeEvent.pageX < 20) {
                setTimeout(() => {
                  decrementIndexOfValuePropArray();
                }, 250);
              }
            }}
          >
            <MdText style={{ color: themeColors.commons.white, textAlign: "center" }}>{selectedValue}</MdText>
          </AvatarSmallInfo>
          <ArrowButton onPress={incrementIndexOfValuePropArray}>
            <Octicons name="chevron-right" size={24} color={themeColors.commons.white} />
          </ArrowButton>
        </AvatarInfoContainer>
      </View>
    </>
  );
};

const AvatarInfoContainer = styled.View`
  padding: 0 10px;
  align-items: center;
  border-radius: 10px;
  border-color: #eeeeee32;
  border-width: 1px;
  flex-direction: row;
  margin: 10px 0;
`;

const ArrowButton = styled.TouchableOpacity`
  padding: 10px;
  width: 10%;
`;

const AvatarInfo = styled.View`
  width: 80%;
`;

const AvatarSmallInfo = styled.View`
  padding: 10px;
  width: 75%;
`;

export default AvatarCreator;
