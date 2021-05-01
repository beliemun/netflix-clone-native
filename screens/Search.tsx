import React from "react";
import { View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

type HomeScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  "Search"
>;

type Props = {
  navigation: HomeScreenNavigationProps;
};

const Search: React.FC<Props> = ({ navigation }) => (
  <View>
    <Text>Search</Text>
  </View>
);

export default Search;
