import React from "react";
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Text,
  View,
} from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import Slider from "../../components/Movies/Slider";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";
import LoadingContainer from "../../components/LoadingContainer";
import HorizontalSlider from "../../components/HorizontalSlider";

const ShowsPresenter: React.FC<IShows> = (shows) => {
  const { loading, aringToday, onTheAir, topRated, popular } = shows;

  return (
    <LoadingContainer loading={loading}>
      <>
        <HorizontalSlider title={"Popular TV Shows"}>
          <>
            {popular.map((show) => (
              <Vertical key={show.id} media={show} type={"show"} />
            ))}
          </>
        </HorizontalSlider>
        <HorizontalSlider title={"Top Rated TV Shows"}>
          <>
            {topRated.map((show) => (
              <Vertical key={show.id} media={show} type={"show"} />
            ))}
          </>
        </HorizontalSlider>
      </>
    </LoadingContainer>
  );
};

export default ShowsPresenter;
