import { useNavigation } from "@react-navigation/core";
import React from "react";
import styled from "styled-components/native";
import { formatDate, trimText } from "../utils";
import Poster from "./Poster";

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

const Date = styled.Text`
  color: white;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Overview = styled.Text`
  width: 100%;
  color: white;
  opacity: 0.8;
`;

const Horizontal: React.FC<IMedia> = (props) => {
  const {
    id,
    mediaType,
    title,
    date,
    overview,
    vote_average,
    poster_path,
    backdrop_path,
    spoken_languages,
  } = props;
  const navigation = useNavigation();
  const goToDetail = () => navigation.navigate("Detail", { ...props });

  return (
    <Container onPress={goToDetail}>
      <Poster url={poster_path} />
      <Data>
        <Title>{trimText(title, 30)}</Title>
        <Date>{formatDate(date)}</Date>
        <Overview>{trimText(overview, 150)}</Overview>
      </Data>
    </Container>
  );
};

export default Horizontal;
