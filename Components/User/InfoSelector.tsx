import { Octicons } from "@expo/vector-icons";
import { AvatarProps } from "react-native-bigheads";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";
import { mapAvatarValues } from "../../data/avatarData";
import RegularText from "../Texts/RegularText";

interface Props {
  size: "small" | "regular";
  decrement: () => void;
  increment: () => void;
  selectedProp?: keyof AvatarProps;
  selectedValue?: any;
}

const InfoSelector = ({ size, decrement, increment, selectedProp, selectedValue }: Props) => {
  const { themeColors } = useTheme();
  return (
    <AvatarInfoContainer>
      <ArrowButton onPress={decrement}>
        <Octicons name="chevron-left" size={size === "regular" ? 32 : 24} color={themeColors.commons.white} />
      </ArrowButton>
      <AvatarInfo
        onTouchStart={(e: any) => (e.touchX = e.nativeEvent.pageX)}
        onTouchMove={(e: any) => {
          if (e.touchX - e.nativeEvent.pageX > 20) {
            setTimeout(() => {
              increment;
            }, 250);
          }
          if (e.touchX - e.nativeEvent.pageX < 20) {
            setTimeout(() => {
              decrement;
            }, 250);
          }
        }}
        size={size}
      >
        {selectedProp && (
          <RegularText size={28} center>
            {mapAvatarValues[selectedProp.toString()]}
          </RegularText>
        )}
        {selectedValue && (
          <RegularText size={20} center>
            {selectedValue}
          </RegularText>
        )}
      </AvatarInfo>
      <ArrowButton onPress={increment}>
        <Octicons name="chevron-right" size={size === "regular" ? 32 : 24} color={themeColors.commons.white} />
      </ArrowButton>
    </AvatarInfoContainer>
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

const AvatarInfo = styled.View<{ size: string }>`
  width: ${({ size }) => (size === "regular" ? "90%" : "80%")};
`;

export default InfoSelector;
