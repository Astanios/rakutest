import React from 'react';

import MovieSummaryInfo from './components/MovieSummaryInfo';
import { MovieSummaryContainer, MovieSummaryImage } from './style'
import { IMovieSummaryProps } from './models';
import { TMD_IMG_URL } from '../../common/constants';

const MovieSummary = ({ movie }: IMovieSummaryProps): React.ReactElement => {
  const { poster_path, ...rest } = movie;
  return (
    <MovieSummaryContainer>
      <MovieSummaryImage
        src={`${TMD_IMG_URL}${movie.poster_path}`}
        alt="movie cover"
      />
      <MovieSummaryInfo movieInfo={rest} />
    </MovieSummaryContainer>
  );
}
export default MovieSummary;
