import React, { useEffect } from 'react';
import ListSuggestions from '../../components/ListSuggestions';

import { connect } from "react-redux";
import { startGetMovies } from "../../store/movie/actions";
import { IState } from '../../store/models';
import { IHomeProps } from './models';

export const Home = ({ startGetMovies, movies }: IHomeProps): React.ReactElement => {
  useEffect(() => {
    startGetMovies();
  }, [startGetMovies]);

  return <ListSuggestions moviesLists={movies} />
}

const mapStateToProps = (state: IState) => ({
  movies: state.movie.movieList
});

const mapDispatchToProps = {
  startGetMovies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
