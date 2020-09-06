import React from 'react';

import { TMD_IMG_URL } from '../../common/constants';
import { IMovieThumbnailProps } from './models';
import { MovieThumbnailContainer, MovieThumbnailImage, MovieThumbnailTitle, MovieThumbnailLink } from './style'

export const MovieThumbnail = ({ movie }: IMovieThumbnailProps): React.ReactElement =>
  <MovieThumbnailLink to={`/details/${movie.id}`}>
    <MovieThumbnailContainer>
      <MovieThumbnailImage src={`${TMD_IMG_URL}${movie.poster_path}`} alt="movie cover" />
      <MovieThumbnailTitle>
        {movie.title}
      </MovieThumbnailTitle>
    </MovieThumbnailContainer>
  </MovieThumbnailLink>

export default MovieThumbnail;
