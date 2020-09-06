import React from 'react';

import { IListMoviesProps } from './models';
import { ListWrapper } from "./style";
import MovieThumbnail from '../MovieThumbnail';

export const ListMovies = ({ movies }: IListMoviesProps): React.ReactElement =>
  <ListWrapper>
    {movies.map((movie, i): React.ReactElement => <MovieThumbnail key={i} movie={movie} />)}
  </ListWrapper>

export default ListMovies;
