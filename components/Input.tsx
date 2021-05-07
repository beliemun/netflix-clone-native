import React from "react";
import styled from "styled-components/native";

const TextInput = styled.TextInput`
  border-radius: 10px;
  border: 1px solid white;
  padding: 10px;
  margin: 10px;
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

interface IProps {
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
  onSubmit: () => void;
}

const Input: React.FC<IProps> = ({
  placeholder,
  value,
  onChange,
  onSubmit,
}) => (
  <TextInput
    value={value}
    placeholder={placeholder}
    returnKeyType={"search"}
    onChangeText={onChange}
    onSubmitEditing={onSubmit}
  />
);

export default Input;
