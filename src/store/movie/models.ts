import { Movie, MovieThumb } from '../../common/models/movie';

export interface MoviesActions {
  type: string;
  payload: any;
}

export interface MovieInitialState {
  isLoading: boolean;
  error: Error;
  movieList: {
    title: string,
    list: MovieThumb[]
  }[];
  searchMoviesHistory: any[];
  movieSelected: Movie;
}