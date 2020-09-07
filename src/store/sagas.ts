import { takeLatest, all } from "redux-saga/effects";

import {
  START_GET_MOVIES,
  START_GET_MOVIE_BY_ID,
  START_SEARCH_MOVIES
} from "./actionTypes";

import {
  getMovies,
  searchMovies,
  getMovieById
} from "./movie/sagas";

export default function* rootSaga() {
  yield all([takeLatest(START_GET_MOVIES, getMovies)]);
  yield all([takeLatest(START_SEARCH_MOVIES, searchMovies)]);
  yield all([takeLatest(START_GET_MOVIE_BY_ID, getMovieById)]);
}
