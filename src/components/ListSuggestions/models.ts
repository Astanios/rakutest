import { MovieThumb } from '../../common/models/movie'

export interface IListSuggestionsProps {
  moviesLists: {
    title: string;
    list: MovieThumb[];
  }[]
}