import { Movie } from '../../common/models/movie';

interface MovieThumbanil {

}

export interface IHomeProps {
  movies: Movie[],
  startGetMovies: () => void;
}