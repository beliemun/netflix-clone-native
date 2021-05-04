import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/core";
import { movieApi } from "../api";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Tabs">;
};

const Movie: React.FC<Props> = ({ navigation }) => {
  const [movies, setMovies] = useState({
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
      nowPlaying,
      nowPlayingError,
      popular,
      popularError,
      upcoming,
      upcomingError,
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Text style={{ color: "white" }}>{movies.nowPlaying?.length}</Text>
    </View>
  );
};

export default Movie;
