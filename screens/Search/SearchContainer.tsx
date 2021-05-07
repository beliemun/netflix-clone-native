import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";
import { TabRouter } from "@react-navigation/routers";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Tabs">;
};

const SearchContainer: React.FC = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState({
    loading: true,
    movies: [],
    shows: [],
    moviesError: null,
    showsError: null,
  });
  const onChange = (text: string) => setKeyword(text);
  const search = async () => {
    if (keyword === "") return;
    const [movies, moviesError] = await movieApi.search(keyword);
    const [shows, showsError] = await tvApi.search(keyword);
    setResults({
      loading: false,
      movies,
      moviesError,
      shows,
      showsError,
    });
  };
  return (
    <SearchPresenter
      keyword={keyword}
      onChange={onChange}
      onSubmit={search}
      {...results}
    />
  );
};

export default SearchContainer;
