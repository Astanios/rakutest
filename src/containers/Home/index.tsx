import React from 'react';
import ListSuggestions from '../../components/ListSuggestions';

import { moviesList } from '../../common/constants';
import Movies from '../../utils/__mocks__/movieList';
export const HomePage = (): React.ReactElement =>
  <div>
    <ListSuggestions suggestions={moviesList} movies={Movies.results} />
  </div>

export default HomePage;
