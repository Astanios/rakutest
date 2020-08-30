import React from 'react';
import { Link } from "react-router-dom";

import { IMovieThumbnailProps } from './models';
import { MovieThumbnailContainer, MovieThumbnailImage, MovieThumbnailTitle } from './style'

export const MovieThumbnail = (): React.ReactElement =>
  <Link to={"/details"}>
    <MovieThumbnailContainer>
      <MovieThumbnailImage src="https://image.tmdb.org/t/p/w400//TnOeov4w0sTtV2gqICqIxVi74V.jpg" alt="movie cover" />
      <MovieThumbnailTitle>
        Project Power
      </MovieThumbnailTitle>
    </MovieThumbnailContainer>
  </Link>

export default MovieThumbnail;
