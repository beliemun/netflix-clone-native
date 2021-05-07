interface IMedia {
  media: IMovie | IShow;
  type: "movie" | "show";
}

interface IMovies {
  loading: boolean;
  nowPlaying: Array<any>;
  nowPlayingError: any;
  popular: Array<any>;
  popularError: any;
  upcoming: Array<any>;
  upcomingError: any;
}

interface IMovie {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
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

interface IShow {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
  first_air_date: string;
}
