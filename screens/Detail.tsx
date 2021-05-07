import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useEffect } from "react";
import { View, Text } from "react-native";

interface IParamsProps {
  media: IMovie | IShow;
  type: "movie" | "show";
}

const Detail = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    const { media, type } = route.params as IParamsProps;
    if (type === "movie") {
      const { title } = media as IMovie;
      navigation.setOptions({
        title,
      });
    } else if (type === "show") {
      const { name } = media as IShow;
      navigation.setOptions({ title: name });
    }
  }, []);

  return (
    <View>
      <Text>Detail</Text>
    </View>
  );
};

export default Detail;
