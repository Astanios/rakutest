import React from 'react';

import { MovieSummaryInfoContainer, MovieSummaryAttr, MovieSummaryInfoLabel, MovieSummaryElem } from './style';
import { IMovieSummaryInfoProps } from './models';

const MovieSummaryInfo = ({ movieInfo }: IMovieSummaryInfoProps): React.ReactElement => {
  const { original_title, genres } = movieInfo;
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
          6.7
        </MovieSummaryElem>
      </MovieSummaryAttr>
      <MovieSummaryAttr>
        <MovieSummaryInfoLabel>
          Overview:
        </MovieSummaryInfoLabel>
        <MovieSummaryElem>
          An ex-soldier, a teen and a cop collide in New Orleans as they hunt for the source behind a dangerous new pill that grants users temporary superpowers.
        </MovieSummaryElem>
      </MovieSummaryAttr>
    </MovieSummaryInfoContainer>
  );
}
export default MovieSummaryInfo