import styled from "styled-components/native";

const Divider = styled.View`
  border-bottom-width: 1px;
`;
const FlexBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

const Container = styled.View`
  padding: 10px;
`;

export { Divider, FlexBox, Container };
