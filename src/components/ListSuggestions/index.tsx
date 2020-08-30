import React from 'react';

import ListMovies from '../ListMovies';
import { ListContainer, ListTitle } from "./style";
import { IListSuggestionsProps } from './models';

export const ListSuggestions = ({ suggestions }: IListSuggestionsProps): React.ReactElement =>
  <ListContainer>
    {suggestions.map((suggestion) =>
      <>
        <ListTitle>
          {suggestion}
        </ListTitle>
        <ListMovies movies={[]} />
      </>
    )}
  </ListContainer>

export default ListSuggestions;
