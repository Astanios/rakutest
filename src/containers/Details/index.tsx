import React, { useEffect } from 'react';
import { connect } from "react-redux";

import MovieSummary from '../../components/MovieSummary';
import { startGetMovieById } from "../../store/movie/actions";
import { IState } from '../../store/models'
import IDetailsProps from './models';

export const Details = ({
  startGetMovieById,
  movie,
  match: {
    params: { selectedId }
  }
}: IDetailsProps): React.ReactElement => {
  useEffect(() => {
    startGetMovieById(selectedId);
  }, [startGetMovieById, selectedId]);

  if (!movie || !movie.title) {
    return null as any;
  }
  return (
    <MovieSummary movie={movie} />
  );
}

const mapStateToProps = (state: IState) => ({
  movie: state.movie.movieSelected
});

const mapDispatchToProps = {
  startGetMovieById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
