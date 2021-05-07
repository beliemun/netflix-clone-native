import React from "react";
import styled from "styled-components/native";

const Container = styled.Text`
  color: white;
  font-size: 13px;
  opacity: 0.8;
`;

interface IProps {
  votes: number;
}

const Votes: React.FC<IProps> = ({ votes }) => (
  <Container>{`⭐️${votes} / 10`}</Container>
);

export default Votes;
