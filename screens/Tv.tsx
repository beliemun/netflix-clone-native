import React, { useLayoutEffect } from "react";
import { View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from "@react-navigation/core";

// type Props = {
//   navigation: StackNavigationProp<RootTabParamList, "Tv">;
// };

const Tv: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    const title = getFocusedRouteNameFromRoute(route) ?? "Shows!";
    navigation.setOptions({ title });
  }, [route]);

  return (
    <View>
      <Text>Tv</Text>
    </View>
  );
};

export default Tv;
