interface IMediaObj {
  data: IMovie | IShow;
  type: "movie" | "show";
}

interface IMedia {
  id: number;
  mediaType: IMediaType;
  title: string;
  date: string;
  overview: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
  spoken_languages?: Array<ISpokenLanguage>;
  status: string;
  videos?: Array<IVideo>;
}

interface ISpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface IVideo {
  id: string;
  iso_3166_1: string;
  iso_639_1: string;
  key: string;
  name: string;
  site: string;
}

type IMediaType = "movie" | "show";

interface IMovies {
  loading: boolean;
  nowPlaying: Array<any>;
  nowPlayingError: any;
  popular: Array<any>;
  popularError: any;
  upcoming: Array<any>;
  upcomingError: any;
}

interface IShows {
  loading: boolean;
  aringToday: Array<any>;
  aringTodayError: any;
  onTheAir: Array<any>;
  onTheAirError: any;
  topRated: Array<any>;
  topRatedError: any;
  popular: Array<any>;
  popularError: any;
}

interface IMovie {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  spoken_languages?: Array<ISpokenLanguage>;
  status: string;
}

interface IShow {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
  first_air_date: string;
  spoken_languages?: Array<ISpokenLanguage>;
  status: string;
}

interface ISearchResult {
  loading: boolean;
  movies: Array<any>;
  shows: Array<any>;
  moviesError: any;
  showsError: any;
}
