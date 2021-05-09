import React from "react";
import { View, Text, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { imgaeApi } from "../../api";
import LoadingContainer from "../../components/LoadingContainer";
import Poster from "../../components/Poster";
import Title from "../../components/Title";
import Votes from "../../components/Votes";
import { formatDate, trimText } from "../../utils";

const Backdrop = styled.Image`
  position: absolute;
  width: 100%;
  height: ${Dimensions.get("window").height / 4}px;
`;

const Curtain = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.3;
`;

const Container = styled.View`
  flex-direction: row;
  margin-top: 140px;
  margin-bottom: 10px;
`;

const Info = styled.View`
  justify-content: flex-end;
`;

const VotesContainer = styled.View`
  margin-left: 10px;
`;

const Date = styled.Text`
  color: white;
  font-size: 14px;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const Overview = styled.Text`
  width: 100%;
  color: white;
  opacity: 0.8;
  line-height: 20px;
  padding: 0 10px;
`;

const DataName = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin: 20px 0 5px;
`;

const DataValue = styled.Text`
  flex: 0;
  color: white;
  opacity: 0.8;
  padding: 5px 10px;
`;

interface IProps {
  media: IMedia;
  loading: boolean;
  getData: () => Promise<void>;
}

const DetailPresenter: React.FC<IProps> = ({ media, loading, getData }) => {
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
    status,
    videos,
  } = media;
  return (
    <View style={{ flex: 1, backgroundColor: "black", padding: 10 }}>
      <Backdrop source={{ uri: imgaeApi(backdrop_path) }} />
      <Curtain />
      <ScrollView>
        <Container>
          <Poster url={imgaeApi(poster_path)} />
          <Info>
            <Title title={trimText(title, 24)} />
            <Date>
              <Text>{formatDate(date)}</Text>
            </Date>
            <VotesContainer>
              <Votes votes={vote_average} />
            </VotesContainer>
          </Info>
        </Container>
        <DataName>Overview</DataName>
        <Overview>{overview ? overview : "(No overview)"}</Overview>
        {spoken_languages && (
          <>
            <DataName>Language</DataName>
            {spoken_languages.map((language, index) => (
              <DataValue key={index}>{language.name}</DataValue>
            ))}
          </>
        )}
        {status && (
          <>
            <DataName>Status</DataName>
            <DataValue>{status}</DataValue>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default DetailPresenter;
