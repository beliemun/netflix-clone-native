import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { formatDate, trimText } from "../../utils";
import Poster from "../Poster";
import Votes from "../Votes";

const Container = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  padding: 10px;
`;

const Title = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Data = styled.View`
  flex: 1;
  padding-left: 10px;
`;

const ReleaseDate = styled.Text`
  color: white;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Overview = styled.Text`
  width: 100%;
  color: white;
  opacity: 0.8;
`;

const Horizontal: React.FC<IMedia> = ({ media, type }) => {
  if (type === "movie") {
    const { id, title, release_date, overview, poster_path } = media as IMovie;
    return (
      <Container>
        <Poster url={poster_path} />
        <Data>
          <Title>{trimText(title, 30)}</Title>
          <ReleaseDate>{formatDate(release_date)}</ReleaseDate>
          <Overview>{trimText(overview, 150)}</Overview>
        </Data>
      </Container>
    );
  } else {
    const { id, name, first_air_date, overview, poster_path } = media as IShow;
    return (
      <Container>
        <Poster url={poster_path} />
        <Data>
          <Title>{trimText(name, 30)}</Title>
          <ReleaseDate>{formatDate(first_air_date)}</ReleaseDate>
          <Overview>{trimText(overview, 150)}</Overview>
        </Data>
      </Container>
    );
  }
};

export default Horizontal;
