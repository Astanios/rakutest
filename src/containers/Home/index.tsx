import React, { useEffect } from 'react';
import ListSuggestions from '../../components/ListSuggestions';

import { connect } from "react-redux";
import { startGetMovies } from "../../store/movie/actions";
import { moviesSelector } from "../../store/movie/selectors";

import { moviesList } from '../../common/constants';
import Movies from '../../utils/__mocks__/movieList';

export const Home = ({ startGetMovies, movies }: any): React.ReactElement => {
  useEffect(() => {
    startGetMovies();
  }, [startGetMovies]);
  console.log('home: ', movies);
  return (
    <div>

    </div>
  )
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

//<ListSuggestions suggestions={moviesList} movies={Movies.results} />