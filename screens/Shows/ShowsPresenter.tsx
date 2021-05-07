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
import Slider from "../../components/Slider";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";
import LoadingContainer from "../../components/LoadingContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import List from "../../components/List";
import Horizontal from "../../components/Horizontal";

interface IProps {
  shows: IShows;
  getData: () => Promise<void>;
}

const ShowsPresenter: React.FC<IProps> = ({ shows, getData }) => {
  const { loading, aringToday, onTheAir, topRated, popular } = shows;

  return (
    <LoadingContainer loading={loading} getData={getData}>
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
        <List title="Airing Today">
          <>
            {aringToday.map((show) => (
              <Horizontal key={show.id} media={show} type={"show"} />
            ))}
          </>
        </List>
      </>
    </LoadingContainer>
  );
};

export default ShowsPresenter;
