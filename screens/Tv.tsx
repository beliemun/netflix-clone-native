import React from "react";
import { View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

type HomeScreenNavigationProps = StackNavigationProp<RootStackParamList, "Tv">;

type Props = {
  navigation: HomeScreenNavigationProps;
};

const Tv: React.FC<Props> = ({ navigation }) => (
  <View>
    <Text>Tv</Text>
  </View>
);

export default Tv;
