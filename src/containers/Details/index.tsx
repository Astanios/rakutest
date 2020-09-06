import React, { useEffect } from 'react';
import { connect } from "react-redux";

import MovieSummary from '../../components/MovieSummary';
import { movieSelectedSelector } from "../../store/movie/selectors";
import { startGetMovieById } from "../../store/movie/actions";

import IDetailsProps from './models';

export const Details = ({
  startGetMovieById,
  movie,
  match: {
    params: { selectedId }
  },
  history: { goBack }
}: IDetailsProps): React.ReactElement => {
  useEffect(() => {
    startGetMovieById(selectedId);
    console.log('details', selectedId);

  }, [startGetMovieById, selectedId]);

  if (!movie || !movie.title) {
    return null as any;
  }
  return (
    <MovieSummary movie={movie} />
  );
}

const mapStateToProps = (state: any): any => ({
  movie: movieSelectedSelector(state)
});

const mapDispatchToProps = {
  startGetMovieById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
