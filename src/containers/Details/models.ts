import { Movie } from '../../common/models/movie';

export default interface IDetailsProps {
  startGetMovieById: (selectedId: string) => void;
  movie: Movie;
  match: {
    params: {
      selectedId: string
    }
  };
}