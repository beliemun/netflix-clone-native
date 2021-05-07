import { useNavigation } from "@react-navigation/core";
import React from "react";
import styled from "styled-components/native";
import { trimText } from "../utils";
import Poster from "./Poster";
import Votes from "./Votes";

const Container = styled.TouchableOpacity`
  align-items: center;
  margin: 10px;
`;

const Title = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0 5px;
`;

const Vertical: React.FC<IMedia> = ({ media, type }) => {
  const navigation = useNavigation();
  const goToDetail = () => navigation.navigate("Detail", { media, type });

  if (type === "movie") {
    const { title, vote_average, poster_path } = media as IMovie;
    return (
      <Container onPress={goToDetail}>
        <Poster url={poster_path} />
        <Title>{trimText(title, 12)}</Title>
        <Votes votes={vote_average} />
      </Container>
    );
  } else {
    const { name, vote_average, poster_path } = media as IShow;
    return (
      <Container onPress={goToDetail}>
        <Poster url={poster_path} />
        <Title>{trimText(name, 12)}</Title>
        <Votes votes={vote_average} />
      </Container>
    );
  }
};

export default Vertical;
