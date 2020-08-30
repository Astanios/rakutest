import React from 'react';

import MovieSummaryInfo from './components/MovieSummaryInfo';
import { MovieSummaryContainer, MovieSummaryImage } from './style'

const MovieThumbnail = (): React.ReactElement =>
  <MovieSummaryContainer>
    <MovieSummaryImage src="https://image.tmdb.org/t/p/w400//TnOeov4w0sTtV2gqICqIxVi74V.jpg" alt="movie cover" />
    <MovieSummaryInfo />
  </MovieSummaryContainer>

export default MovieThumbnail;
