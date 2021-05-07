import React from "react";
import styled from "styled-components/native";
import { movieApi } from "../../api";
import Horizontal from "../../components/Horizontal";
import HorizontalSlider from "../../components/HorizontalSlider";
import Input from "../../components/Input";
import LoadingContainer from "../../components/LoadingContainer";
import Vertical from "../../components/Vertical";

const Container = styled.ScrollView`
  background-color: black;
`;

interface IProps {
  loading: boolean;
  movies: IMovie[];
  shows: IShow[];
  keyword: string;
  onChange: (text: string) => void;
  onSubmit: () => void;
}

const SearchPresenter: React.FC<IProps> = ({
  loading,
  movies,
  shows,
  keyword,
  onChange,
  onSubmit,
}) => {
  return (
    <Container>
      <Input
        placeholder={"Write a keyword"}
        value={keyword}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      {movies.length > 0 && (
        <HorizontalSlider title="Movie Results">
          <>
            {movies.map((movie) => (
              <Vertical key={movie.id} media={movie} type={"movie"} />
            ))}
          </>
        </HorizontalSlider>
      )}
      {shows.length > 0 && (
        <HorizontalSlider title="TV Results">
          <>
            {shows.map((show) => (
              <Vertical key={show.id} media={show} type={"show"} />
            ))}
          </>
        </HorizontalSlider>
      )}
    </Container>
  );
};

export default SearchPresenter;
