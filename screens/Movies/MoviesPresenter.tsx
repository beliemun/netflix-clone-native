import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import Slider from "../../components/Movies/Slider";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: black;
`;

const MoviePresenter = (movies: IMovies) => {
  const { loading, nowPlaying } = movies;
  return (
    <Container>
      {loading ? (
        <ActivityIndicator color={"white"} />
      ) : (
        <Swiper controlsEnabled={false} loop timeout={3}>
          {nowPlaying.map((movie: IMovie) => (
            <Slider key={movie.id} {...movie} />
          ))}
        </Swiper>
      )}
    </Container>
  );
};

export default MoviePresenter;
