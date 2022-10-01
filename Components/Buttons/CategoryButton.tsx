import styled from "styled-components/native";
import { useSound } from "../../contexts/SoundContext";
import STMText from "../Texts/ShareTechMonoText";

interface Props {
  title: string;
  img: React.ReactNode;
  color: string;
  onPress?: () => void;
}

const CategoryButton = ({ title, img, color, onPress }: Props) => {
  const { playButtonEffect } = useSound();
  return (
    <Button activeOpacity={0.8} color={color} onPress={onPress} onPressIn={() => playButtonEffect()}>
      <CardImage source={img} />
      <Title size={30} uppercase>
        {title}
      </Title>
    </Button>
  );
};

export default CategoryButton;

const Button = styled.TouchableOpacity<{ color: string }>`
  background-color: ${(props) => props.color};
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  elevation: 8;
  padding: 10px 0;
  margin-bottom: 21px;
`;
const Title = styled(STMText)``;
const CardImage = styled.Image`
  height: 71px;
  width: 71px;
  margin: 0 25px;
  elevation: 2;
  shadowcolor: black;
`;
