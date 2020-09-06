import React from 'react';

import ListMovies from '../ListMovies';
import { ListContainer, ListTitle, ListWrapper } from "./style";
import { IListSuggestionsProps } from './models';

export const ListSuggestions = ({ moviesLists }: IListSuggestionsProps): React.ReactElement =>
  <ListWrapper>
    {moviesLists.map(({ title, list }, i) =>
      <ListContainer
        key={i}
      >
        <ListTitle>
          {title}
        </ListTitle>
        <ListMovies movies={list} />
      </ListContainer>
    )}
  </ListWrapper>

export default ListSuggestions;
