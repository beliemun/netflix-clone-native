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
  backdrop_path: string;
  vote_average: number;
}
