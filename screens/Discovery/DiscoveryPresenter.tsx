import React, { useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  PanResponder,
  StyleSheet,
  Text,
  View,
} from "react-native";
import styled from "styled-components/native";
import { imgaeApi } from "../../api";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

interface IProps {
  results: IMovie[];
  error: null;
}

const DiscoveryPresenter: React.FC<IProps> = ({ results, error }) => {
  const [topIndex, setTopIndex] = useState(0);
  const nextCard = () => setTopIndex((currentValue) => (currentValue += 1));
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (e, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: (e, { dx, dy }) => {
      if (dx < -200) {
        Animated.spring(position, {
          toValue: {
            x: -WIDTH * 1.2,
            y: dy,
          },
          useNativeDriver: true,
          bounciness: 15,
        }).start(nextCard);
      } else if (dx > 200) {
        Animated.spring(position, {
          toValue: {
            x: WIDTH * 1.2,
            y: dy,
          },
          useNativeDriver: true,
          bounciness: 15,
        }).start(nextCard);
      } else {
        Animated.spring(position, {
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: true,
          bounciness: 15,
          // friction: 10,
        }).start();
      }
    },
  });
  const rotationZValues = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: ["-15deg", "0deg", "15deg"],
    extrapolate: "clamp",
  });
  const secondCardOpacity = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0, 1],
    extrapolate: "clamp",
  });
  const secondCardScale = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0.8, 1],
    extrapolate: "clamp",
  });

  return (
    <Container>
      {results.map((movie, index) => {
        if (index === topIndex) {
          return (
            <Animated.View
              key={movie.id}
              {...panResponder.panHandlers}
              style={{
                ...styles.card,
                zIndex: -index,
                transform: [
                  ...position.getTranslateTransform(),
                  { rotateZ: rotationZValues },
                ],
              }}
            >
              <Poster source={{ uri: imgaeApi(movie.poster_path) }} />
            </Animated.View>
          );
        } else if (index === topIndex + 1) {
          return (
            <Animated.View
              key={movie.id}
              {...panResponder.panHandlers}
              style={{
                ...styles.card,
                zIndex: -index,
                transform: [{ scale: secondCardScale }],
                opacity: secondCardOpacity,
              }}
            >
              <Poster source={{ uri: imgaeApi(movie.poster_path) }} />
            </Animated.View>
          );
        } else {
          return null; // 보이지 않은 카드들을 렌더하지 않음.
          // return (
          //   <Animated.View
          //     key={movie.id}
          //     {...panResponder.panHandlers}
          //     style={{
          //       ...styles.card,
          //       zIndex: 100 - index,
          //       opacity: 0,
          //     }}
          //   >
          //     <Poster source={{ uri: imgaeApi(movie.poster_path) }} />
          //   </Animated.View>
          // );
        }
      })}
    </Container>
  );
};

export default DiscoveryPresenter;

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    top: 50,
    width: "80%",
    height: HEIGHT / 1.7,
  },
});

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: black;
`;

const Poster = styled.Image`
  flex: 1;
  border-radius: 20px;
`;
