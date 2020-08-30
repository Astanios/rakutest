import React from 'react';
import ListSuggestions from '../../components/ListSuggestions';

import { moviesList } from '../../common/constants';

export const HomePage = (): React.ReactElement =>
  <div>
    <ListSuggestions suggestions={moviesList} />
  </div>

export default HomePage;
