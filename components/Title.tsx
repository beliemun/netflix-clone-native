import React from "react";
import styled from "styled-components/native";

const Text = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin: 10px;
`;

interface IProps {
  title: string;
}

const Title: React.FC<IProps> = ({ title }) => <Text>{title}</Text>;

export default Title;
