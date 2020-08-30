import React from 'react';
import { Link } from "react-router-dom";

import { TMD_IMG_URL } from '../../common/constants';
import { IMovieThumbnailProps } from './models';
import { MovieThumbnailContainer, MovieThumbnailImage, MovieThumbnailTitle } from './style'

export const MovieThumbnail = ({ movie }: IMovieThumbnailProps): React.ReactElement =>
  <Link to={"/details"}>
    <MovieThumbnailContainer>
      <MovieThumbnailImage src={`${TMD_IMG_URL}${movie.poster_path}`} alt="movie cover" />
      <MovieThumbnailTitle>
        {movie.title}
      </MovieThumbnailTitle>
    </MovieThumbnailContainer>
  </Link>

export default MovieThumbnail;
