import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/core";
import { movieApi } from "../api";

const Discovery: React.FC = () => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState({
    results: [],
    error: null,
  });
  const getData = async () => {
    const [results, error] = await movieApi.discover();
    setMovies({ results, error });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <Text>{movies.results.length}</Text>
    </View>
  );
};

export default Discovery;
