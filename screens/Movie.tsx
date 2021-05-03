import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/core";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Tabs">;
};

const Movie: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Text>Movie</Text>
      <Button onPress={() => navigation.push("Detail")} title="Go to Detail" />
    </View>
  );
};

export default Movie;
