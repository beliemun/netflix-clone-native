import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useLayoutEffect, useState } from "react";
import { movieApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";
import * as WebBrowser from "expo-web-browser";

const DetailContainer: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const props = route.params as IMedia;
  const {
    id,
    mediaType,
    title,
    date,
    overview,
    vote_average,
    poster_path,
    backdrop_path,
    status,
    imdb_id,
    spoken_languages,
  } = props;
  const [loading, setLoading] = useState(false);
  const [media, setMedia] = useState<IMedia>({
    id,
    mediaType,
    title,
    date,
    overview,
    vote_average,
    poster_path,
    backdrop_path,
    status,
    imdb_id,
    spoken_languages,
  });

  useLayoutEffect(() => {
    navigation.setOptions({ title });
    setLoading(true);
    getData();
    setLoading(false);
  }, [id]);

  const getData = async () => {
    if (mediaType === "movie") {
      const [getMovie, getMovieError] = await movieApi.movie(media.id);
      setMedia({
        id: getMovie.id,
        mediaType,
        title: getMovie.title,
        date: getMovie.release_date,
        overview: getMovie.overview,
        vote_average: getMovie.vote_average,
        poster_path: getMovie.poster_path,
        backdrop_path: getMovie.backdrop_path,
        spoken_languages: getMovie.spoken_languages,
        status: getMovie.status,
        imdb_id: getMovie.imdb_id,
        videos: getMovie.videos.results,
      });
    } else {
      const [getShow, getShowError] = await tvApi.tv(media.id);
      setMedia({
        id: getShow.id,
        mediaType,
        title: getShow.name,
        date: getShow.first_air_date,
        overview: getShow.overview,
        vote_average: getShow.vote_average,
        poster_path: getShow.poster_path,
        backdrop_path: getShow.backdrop_path,
        spoken_languages: getShow.spoken_languages,
        status: getShow.status,
        imdb_id: getShow.imdb_id,
        videos: getShow.videos.results,
      });
    }
  };

  const openBrowser = async (url: string): Promise<void> => {
    await WebBrowser.openBrowserAsync(url);
  };

  return (
    <DetailPresenter
      media={media}
      loading={loading}
      getData={getData}
      openBrowser={openBrowser}
    />
  );
};

export default DetailContainer;
