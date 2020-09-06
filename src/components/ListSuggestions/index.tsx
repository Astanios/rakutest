import React from 'react';

import ListMovies from '../ListMovies';
import { ListContainer, ListTitle } from "./style";
import { IListSuggestionsProps } from './models';

export const ListSuggestions = ({ moviesLists }: IListSuggestionsProps): React.ReactElement => {
  return (
    <div>
      {moviesLists.map(({ title, list }) =>
        <ListContainer>
          <ListTitle>
            {title}
          </ListTitle>
          <ListMovies movies={list} />
        </ListContainer>
      )}
    </div>
  );
}
export default ListSuggestions;
