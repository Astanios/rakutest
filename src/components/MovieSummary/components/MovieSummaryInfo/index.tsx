import React from 'react';

import { MovieSummaryInfoContainer, MovieSummaryAttr, MovieSummaryInfoLabel, MovieSummaryElem } from './style';
import { IMovieSummaryInfoProps } from './models';

const MovieSummaryInfo = ({ movieInfo }: IMovieSummaryInfoProps): React.ReactElement => {
  const { original_title, genres, vote_average, overview } = movieInfo;
  return (
    <MovieSummaryInfoContainer>
      <MovieSummaryAttr>
        <MovieSummaryInfoLabel>
          Title:
        </MovieSummaryInfoLabel>
        <MovieSummaryElem>
          {original_title}
        </MovieSummaryElem>
      </MovieSummaryAttr>
      <MovieSummaryAttr>
        <MovieSummaryInfoLabel>
          Genres:
        </MovieSummaryInfoLabel>
        <MovieSummaryElem>
          {genres.map(genre => genre.name).reduce((res, genre) => `${res}, ${genre}`)}
        </MovieSummaryElem>
      </MovieSummaryAttr>
      <MovieSummaryAttr>
        <MovieSummaryInfoLabel>
          Rating:
        </MovieSummaryInfoLabel>
        <MovieSummaryElem>
          {vote_average}
        </MovieSummaryElem>
      </MovieSummaryAttr>
      <MovieSummaryAttr>
        <MovieSummaryInfoLabel>
          Overview:
        </MovieSummaryInfoLabel>
        <MovieSummaryElem>
          {overview}
        </MovieSummaryElem>
      </MovieSummaryAttr>
    </MovieSummaryInfoContainer>
  );
}
export default MovieSummaryInfo