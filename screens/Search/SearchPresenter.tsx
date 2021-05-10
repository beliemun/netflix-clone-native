import React from "react";
import styled from "styled-components/native";
import HorizontalSlider from "../../components/HorizontalSlider";
import Input from "../../components/Input";
import LoadingContainer from "../../components/LoadingContainer";
import Vertical from "../../components/Vertical";
import { getMedia } from "../../utils";

const Container = styled.ScrollView`
  background-color: black;
`;

interface IProps {
  loading: boolean;
  movies: IMovie[];
  shows: IShow[];
  keyword: string;
  onChange: (text: string) => void;
  onSubmit: () => Promise<void>;
}

const SearchPresenter: React.FC<IProps> = ({
  movies,
  shows,
  keyword,
  onChange,
  onSubmit,
}) => {
  return (
    <LoadingContainer loading={false} getData={onSubmit}>
      <>
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
                <Vertical key={movie.id} {...getMedia(movie, "movie")} />
              ))}
            </>
          </HorizontalSlider>
        )}
        {shows.length > 0 && (
          <HorizontalSlider title="TV Results">
            <>
              {shows.map((show) => (
                <Vertical key={show.id} {...getMedia(show, "show")} />
              ))}
            </>
          </HorizontalSlider>
        )}
      </>
    </LoadingContainer>
  );
};

export default SearchPresenter;
