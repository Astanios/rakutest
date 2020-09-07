import { MovieThumb } from '../../common/models/movie';

export interface IHomeProps {
  movies: {
    title: string;
    list: MovieThumb[];
  }[];
  startGetMovies: () => void;
}