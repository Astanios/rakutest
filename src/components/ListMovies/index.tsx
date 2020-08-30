import React from 'react';

import { IListMoviesProps } from './models';
import { Movie } from '../../common/models/movie'

import MovieThumbnail from '../MovieThumbnail';

export const ListMovies = ({ movies }: IListMoviesProps): React.ReactElement =>
  <div>
    {movies.map((movie): Movie => <MovieThumbnail key={movie.id} movie={movie} />)}
  </div>

export default ListMovies;
