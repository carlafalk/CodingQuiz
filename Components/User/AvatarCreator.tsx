import React, { useEffect, useState } from "react";
import { AvatarProps, BigHead } from "react-native-bigheads";
import styled from "styled-components/native";
import { useUser } from "../../contexts/UserContext";
import { avatarProps, avatarPropsArray, defaultAvatar } from "../../data/avatarData";
import InfoSelector from "./InfoSelector";

interface Props {
  avatarRef: React.MutableRefObject<AvatarProps>;
}

const AvatarCreator = ({ avatarRef }: Props) => {
  const [selectedProp, setSelectedProp] = useState<keyof AvatarProps>("accessory");
  const { currentUser } = useUser();
  const [avatar, setAvatar] = useState<AvatarProps>(defaultAvatar);
  const [selectedValue, setSelectedValue] = useState<any>(avatar[selectedProp]);

  useEffect(() => {
    if (currentUser) {
      setAvatar(currentUser?.avatar);
    }
  }, []);
  useEffect(() => {
    avatarRef.current = avatar;
  }, [avatar]);

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
      <Container>
        <BigHead {...avatar} />
        <InfoSelector size="regular" decrement={decrementProp} increment={incrementProp} selectedProp={selectedProp} />
        <InfoSelector
          size="small"
          decrement={decrementIndexOfValuePropArray}
          increment={incrementIndexOfValuePropArray}
          selectedValue={selectedValue}
        />
      </Container>
    </>
  );
};

const Container = styled.View`
  align-items: center;
`;
export default AvatarCreator;
