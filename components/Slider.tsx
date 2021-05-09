import { useNavigation } from "@react-navigation/core";
import React from "react";
import styled from "styled-components/native";
import { imgaeApi } from "../api";
import { trimText } from "../utils";
import Poster from "./Poster";
import Votes from "./Votes";

// Swiper 내부 최상단 컨테이너에 높이를 100%라고 써주지 않으면 웹에서 이상하게 나옴
const Container = styled.View`
  height: 100%;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.4;
`;

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const VotesContainer = styled.Text`
  margin-bottom: 10px;
`;

const Overview = styled.Text`
  color: white;
  opacity: 0.8;
  margin-bottom: 10px;
`;

const Button = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 5px;
  background-color: #e74c3c;
`;

const ButtonText = styled.Text`
  color: white;
`;

const Slider: React.FC<IMedia> = (props) => {
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
    <Container>
      <Image source={{ uri: imgaeApi(backdrop_path) }} blurRadius={2} />
      <Content>
        <Poster url={imgaeApi(poster_path)} />
        <Data>
          <Title>{trimText(title, 30)}</Title>
          <VotesContainer>
            <Votes votes={vote_average} />
          </VotesContainer>
          <Overview>{trimText(overview, 100)}</Overview>
          <Button onPress={goToDetail}>
            <ButtonText>View details</ButtonText>
          </Button>
        </Data>
      </Content>
    </Container>
  );
};

export default Slider;
