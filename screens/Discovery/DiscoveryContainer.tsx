import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import DiscoveryPresenter from "./DiscoveryPresenter";
import { movieApi } from "../../api";
import { getMedia } from "../../utils";

const DiscoveryContainer: React.FC = () => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState({ results: [], error: null });

  const getData = async () => {
    const [results, error] = await movieApi.discover();
    setMovies({
      results,
      error,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return <DiscoveryPresenter {...movies} />;
};

export default DiscoveryContainer;
