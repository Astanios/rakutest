import React, { useEffect } from 'react';
import ListSuggestions from '../../components/ListSuggestions';

import { connect } from "react-redux";
import { startGetMovies } from "../../store/movie/actions";
import { moviesSelector } from "../../store/movie/selectors";

export const Home = ({ startGetMovies, movies }: any): React.ReactElement => {
  useEffect(() => {
    startGetMovies();
  }, [startGetMovies]);
  return <ListSuggestions moviesLists={movies} />

}

const mapStateToProps = (state: any) => ({
  movies: moviesSelector(state)
});

const mapDispatchToProps = {
  startGetMovies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
