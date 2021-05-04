import React, { useEffect, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { movieApi } from "../../api";
import MoivesPresenter from "./MoviesPresenter";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Tabs">;
};

const Movies: React.FC<Props> = ({ navigation }) => {
  const [movies, setMovies] = useState<IMovies>({
    loading: true,
    nowPlaying: [],
    nowPlayingError: null,
    popular: [],
    popularError: null,
    upcoming: [],
    upcomingError: null,
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.nowPlaying();
    setMovies({
      loading: false,
      nowPlaying,
      nowPlayingError,
      popular,
      popularError,
      upcoming,
      upcomingError,
    });
  };

  return <MoivesPresenter {...movies} />;
};

export default Movies;
