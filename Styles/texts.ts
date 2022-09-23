import styled from "styled-components/native";

const CenteredText = styled.Text`
  text-align: center;
`;

const ColoredText = styled.Text`
  color: #fff;
`;

const SmText = styled(ColoredText)`
  font-size: 14px;
`;

const MdText = styled(ColoredText)`
  font-size: 20px;
`;

const LgText = styled(ColoredText)`
  font-size: 28px;
`;

const XlText = styled(ColoredText)`
  font-size: 32px;
`;

export { SmText, MdText, LgText, XlText, CenteredText };
