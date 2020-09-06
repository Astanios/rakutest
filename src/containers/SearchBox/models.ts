import { MovieThumb } from '../../common/models/movie';

export interface ISearchBoxProps {
  startSearchMovie: (movie: string) => void;
  searchMoviesHistory: MovieThumb[];
}