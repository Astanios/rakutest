import React from 'react';

import ListMovies from '../ListMovies';
import { ListContainer, ListTitle } from "./style";
import { IListSuggestionsProps } from './models';

export const ListSuggestions = ({ suggestions, movies }: IListSuggestionsProps): React.ReactElement => {
  console.log('ListSuggestions: ', movies);
  return (
    <ListContainer>
      {suggestions.map((suggestion) =>
        <>
          <ListTitle>
            {suggestion}
          </ListTitle>
          <ListMovies movies={movies} />
        </>
      )}
    </ListContainer>
  );
}
export default ListSuggestions;
