import React, { useEffect, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { tvApi } from "../../api";
import ShowsPresenter from "./ShowsPresenter";

interface IProps {
  navigation: StackNavigationProp<RootStackParamList, "Tabs">;
}

const ShowsContainer: React.FC<IProps> = ({ navigation }) => {
  const [shows, setShows] = useState<IShows>({
    loading: true,
    aringToday: [],
    aringTodayError: null,
    onTheAir: [],
    onTheAirError: null,
    topRated: [],
    topRatedError: null,
    popular: [],
    popularError: null,
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const [aringToday, aringTodayError] = await tvApi.aringToday();
    const [onTheAir, onTheAirError] = await tvApi.onTheAir();
    const [topRated, topRatedError] = await tvApi.topRated();
    const [popular, popularError] = await tvApi.popular();
    setShows({
      loading: false,
      aringToday,
      aringTodayError,
      onTheAir,
      onTheAirError,
      topRated,
      topRatedError,
      popular,
      popularError,
    });
  };

  return <ShowsPresenter getData={getData} shows={shows} />;
};

export default ShowsContainer;
