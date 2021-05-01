import React from "react";
import { View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

type HomeScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  "Movie"
>;
type Props = {
  navigation: HomeScreenNavigationProps;
};

const Home: React.FC<Props> = ({ navigation }) => (
  <View>
    <Text>Movie</Text>
  </View>
);

export default Home;
