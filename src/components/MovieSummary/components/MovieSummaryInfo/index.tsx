import React from 'react';

import { MovieSummaryInfoContainer, MovieSummaryAttr, MovieSummaryInfoLabel, MovieSummaryElem } from './style';
import { IMovieSummaryInfoProps } from './models';

const MovieSummaryInfo = (): React.ReactElement =>
  <MovieSummaryInfoContainer>
    <MovieSummaryAttr>
      <MovieSummaryInfoLabel>
        Title:
      </MovieSummaryInfoLabel>
      <MovieSummaryElem>
        Project Power
      </MovieSummaryElem>
    </MovieSummaryAttr>
    <MovieSummaryAttr>
      <MovieSummaryInfoLabel>
        Genres:
      </MovieSummaryInfoLabel>
      <MovieSummaryElem>
        Action, Crime, SciFi
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
        Summary:
      </MovieSummaryInfoLabel>
      <MovieSummaryElem>
        An ex-soldier, a teen and a cop collide in New Orleans as they hunt for the source behind a dangerous new pill that grants users temporary superpowers.
      </MovieSummaryElem>
    </MovieSummaryAttr>
  </MovieSummaryInfoContainer>

export default MovieSummaryInfo