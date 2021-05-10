import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  background-color: #e74c3c;
  padding: 8px 12px;
  margin: 5px 0;
  border-radius: 10px;
`;

interface IProps {
  onPress: () => void;
  text: string;
  icon: React.ComponentProps<typeof FontAwesome>["name"];
}

const Link: React.FC<IProps> = ({ onPress, text, icon }) => (
  <Container onPress={onPress}>
    <FontAwesome name={icon} color="white" size={20} />
    <Text style={{ color: "white", marginLeft: 5 }}>{text}</Text>
  </Container>
);

export default Link;
