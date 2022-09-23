import { StyleSheet } from "react-native";
import styled from "styled-components/native";

interface Props {
  title: string;
  img: React.ReactNode;
  color: string;
  onPress?: () => void;
}

const CategoryButton = ({ title, img, color, onPress }: Props) => {
  return (
    <Button activeOpacity={0.8} color={color} onPress={onPress}>
      <CardImage source={img} />
      <Title>{title}</Title>
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
const Title = styled.Text`
  font-family: "ShareTechMono";
  color: white;
  font-size: 30px;
  text-transform: uppercase;
`;
const CardImage = styled.Image`
  height: 71px;
  width: 71px;
  margin: 0 25px;
  elevation: 2;
  shadowcolor: black;
`;

const styles = StyleSheet.create({});
