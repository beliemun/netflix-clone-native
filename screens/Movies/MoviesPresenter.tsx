import React from "react";
import { Dimensions, ScrollView } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import Slider from "../../components/Movies/Slider";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Movies/Horizontal";
import LoadingContainer from "../../components/LoadingContainer";
import HorizontalSlider from "../../components/HorizontalSlider";

const { height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 3.5}px;
  margin-bottom: 30px;
`;

const MoviePresenter: React.FC<IMovies> = (movies) => {
  const { loading, nowPlaying, popular, upcoming } = movies;
  return (
    <LoadingContainer loading={loading}>
      <>
        <SliderContainer>
          <Swiper controlsEnabled={false} loop timeout={3}>
            {nowPlaying.map((movie: IMovie) => (
              <Slider key={movie.id} {...movie} />
            ))}
          </Swiper>
        </SliderContainer>

        <HorizontalSlider title={"Popular Movies"}>
          <>
            {popular.map((movie) => (
              <Vertical key={movie.id} media={movie} type={"movie"} />
            ))}
          </>
        </HorizontalSlider>

        <Title title={"Coming Soon"} />
        {upcoming.map((movie) => (
          <Horizontal key={movie.id} media={movie} type={"movie"} />
        ))}
      </>
    </LoadingContainer>
  );
};

export default MoviePresenter;
