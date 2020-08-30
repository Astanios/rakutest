import React from 'react';

import { IListMoviesProps } from './models';
import { Movie } from '../../common/models/movie'
import { ListWrapper } from "./style";

import MovieThumbnail from '../MovieThumbnail';

export const ListMovies = ({ movies }: IListMoviesProps): React.ReactElement =>
  <ListWrapper>
    <MovieThumbnail />
    <MovieThumbnail />
    <MovieThumbnail />
    <MovieThumbnail />
    <MovieThumbnail />
    <MovieThumbnail />
    <MovieThumbnail />
  </ListWrapper>

export default ListMovies;
