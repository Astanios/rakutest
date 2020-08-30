export const isLoadingSelector = (state: any) => state.movie.isLoading;

export const moviesSelector = (state: any) => state.movie.movieList;

export const searchMoviesSelector = (state: any) => state.movie.searchMoviesHistory;

export const movieSelectedSelector = (state: any) => state.movie.movieSelected;
