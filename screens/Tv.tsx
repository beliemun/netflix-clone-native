import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text } from "react-native";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from "@react-navigation/core";
import { tvApi } from "./../api";

const Tv: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [show, setShows] = useState({
    today: [],
    todayError: null,
    thisWeek: [],
    thisWeekError: null,
    topRated: [],
    topRatedError: null,
    popular: [],
    popularError: null,
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const [today, todayError] = await tvApi.today();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();
    const [topRated, topRatedError] = await tvApi.topRated();
    const [popular, popularError] = await tvApi.popular();
    setShows({
      today,
      todayError,
      thisWeek,
      thisWeekError,
      topRated,
      topRatedError,
      popular,
      popularError,
    });
  };

  return (
    <View>
      <Text>{show.popular?.length}</Text>
    </View>
  );
};

export default Tv;
