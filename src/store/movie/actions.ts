import * as ActionTypes from "../actionTypes";

export const startSearchMovie = (payload: any) => ({
  type: ActionTypes.START_SEARCH_MOVIE,
  payload
});

export const successSearchMovie = (payload: any) => ({
  type: ActionTypes.SUCCESS_SEARCH_MOVIE,
  payload
});

export const failSearchMovie = (payload: any) => ({
  type: ActionTypes.FAIL_SEARCH_MOVIE,
  payload
});

export const startGetMovies = (payload: any) => ({
  type: ActionTypes.START_GET_MOVIES,
  payload
});

export const successGetMovies = (payload: any) => ({
  type: ActionTypes.SUCCESS_GET_MOVIES,
  payload
});

export const failGetMovies = (payload: any) => ({
  type: ActionTypes.FAIL_GET_MOVIES,
  payload
});

export const startGetMovieById = (payload: any) => ({
  type: ActionTypes.START_GET_MOVIE_BY_ID,
  payload
});

export const successGetMovieById = (payload: any) => ({
  type: ActionTypes.SUCCESS_GET_MOVIE_BY_ID,
  payload
});

export const failGetMovieById = (payload: any) => ({
  type: ActionTypes.FAIL_GET_MOVIE_BY_ID,
  payload
});
