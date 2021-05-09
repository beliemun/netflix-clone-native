import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useLayoutEffect, useState } from "react";
import { movieApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

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
    spoken_languages,
    status,
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
    spoken_languages,
    status,
  });

  useLayoutEffect(() => {
    navigation.setOptions({ title });
    setLoading(true);
    getData();
    setLoading(false);
  }, [id]);

  const getData = async () => {
    const [getMovie, getMovieError] = await movieApi.movie(media.id);
    if (mediaType === "movie") {
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
        videos: getMovie.videos,
      });
    } else {
      setMedia({
        id: getMovie.id,
        mediaType,
        title: getMovie.name,
        date: getMovie.first_air_date,
        overview: getMovie.overview,
        vote_average: getMovie.vote_average,
        poster_path: getMovie.poster_path,
        backdrop_path: getMovie.backdrop_path,
        spoken_languages: getMovie.spoken_languages,
        status: getMovie.status,
        videos: getMovie.videos,
      });
    }
  };

  return <DetailPresenter media={media} loading={loading} getData={getData} />;
};

export default DetailContainer;
