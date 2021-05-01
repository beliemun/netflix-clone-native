import React from "react";
import { View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

type HomeScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  "Favorites"
>;

type Props = {
  navigation: HomeScreenNavigationProps;
};

const Favorites: React.FC<Props> = ({ navigation }) => (
  <View>
    <Text>Favorites</Text>
  </View>
);

export default Favorites;
