import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movie from "../screens/Movie";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favorites from "../screens/Favorites";

const Tabs = createBottomTabNavigator<RootTabParamList>();

export default () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Movie" component={Movie} />
    <Tabs.Screen name="Tv" component={Tv} />
    <Tabs.Screen name="Search" component={Search} />
    <Tabs.Screen name="Favorites" component={Favorites} />
  </Tabs.Navigator>
);
