import axios from "axios";

const TMDB_KEY = "3a377862d155dc0b034c393fad709b13";

const makeRequest = (path: string, params: any) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: { ...params, api_key: TMDB_KEY },
  });

const getAnything = async (path: string, params: any = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (e) {
    return [null, e];
  }
};

export const movieApi = {
  nowPlaying: () => getAnything("/movie/now_playing"),
  popular: () => getAnything("/movie/popular"),
  upcoming: () => getAnything("/movie/upcoming", { region: "kr" }),
  search: (query: string) => getAnything("/search/movie", { query }),
  movie: (id: number) => getAnything(`/movie/${id}`),
  discover: () => getAnything("/discover/movie/"),
};

export const tvApi = {
  today: () => getAnything("/tv/airing_today"),
  thisWeek: () => getAnything("/tv/on_the_air"),
  topRated: () => getAnything("/tv/top_rated"),
  popular: () => getAnything("/tv/popular"),
  search: (query: string) => getAnything("/search/tv/", { query }),
  tv: (id: number) => getAnything(`/tv/${id}`),
};

export const imgaeApi = (path: string) =>
  `https://image.tmdb.org/t/p/w500${path}`;
