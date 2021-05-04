import React from "react";
import { Dimensions, Image } from "react-native";
import styled from "styled-components/native";
import { imgaeApi } from "../../api";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Container = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4}px;
  background-color: red;
`;

const Text = styled.Text``;

const Slider: React.FC<IMovie> = (movie) => {
  const { title, backdrop_path } = movie;
  return (
    <Container>
      <Image
        style={{ width: "100%", height: "100%" }}
        source={{ uri: imgaeApi(backdrop_path) }}
      />
      <Text>{title}</Text>
    </Container>
  );
};

export default Slider;
