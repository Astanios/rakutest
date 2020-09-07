import { AxiosResponse } from 'axios';
import * as ActionTypes from "../actionTypes";
import { Movie, MovieThumb } from '../../common/models/movie';

export const startSearchMovie = (payload: string) => ({
  type: ActionTypes.START_SEARCH_MOVIES,
  payload
});

export const successSearchMovie = (payload: MovieThumb[]) => ({
  type: ActionTypes.SUCCESS_SEARCH_MOVIES,
  payload
});

export const failSearchMovie = (payload: Error) => ({
  type: ActionTypes.FAIL_SEARCH_MOVIES,
  payload
});

export const startGetMovies = () => ({
  type: ActionTypes.START_GET_MOVIES
});

export const successGetMovies = (payload: AxiosResponse) => ({
  type: ActionTypes.SUCCESS_GET_MOVIES,
  payload
});

export const failGetMovies = (payload: Error) => ({
  type: ActionTypes.FAIL_GET_MOVIES,
  payload
});

export const startGetMovieById = (payload: string) => ({
  type: ActionTypes.START_GET_MOVIE_BY_ID,
  payload
});

export const successGetMovieById = (payload: Movie) => ({
  type: ActionTypes.SUCCESS_GET_MOVIE_BY_ID,
  payload
});

export const failGetMovieById = (payload: Error) => ({
  type: ActionTypes.FAIL_GET_MOVIE_BY_ID,
  payload
});
