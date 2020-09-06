import { MovieThumb } from '../../common/models/movie';

export interface IHomeProps {
  movies: MovieThumb[],
  startGetMovies: () => void;
}