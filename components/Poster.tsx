import React from "react";
import styled from "styled-components/native";
import { imgaeApi } from "../api";

const Image = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 5px;
`;

interface IProps {
  url: string;
}

const Poster: React.FC<IProps> = ({ url }) => (
  <Image source={{ uri: imgaeApi(url) }} />
);

export default Poster;
