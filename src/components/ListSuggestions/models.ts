import { Movie } from '../../common/models/movie'

export interface IListSuggestionsProps {
  suggestions: string[];
  movies: Movie[];
}