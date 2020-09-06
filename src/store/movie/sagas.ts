import { call, put } from "redux-saga/effects";
import {
  successGetMovieById,
  successGetMovies,
  successSearchMovie,
  failGetMovieById,
  failGetMovies,
  failSearchMovie
} from "./actions";
import WebService from "../../utils/api";

export function* getMovies() {
  try {
    const response = yield call(WebService.getMovies);

    if (!response || !response.data) {
      throw new Error(response.problem);
    }

    yield put(successGetMovies(response.data.results));
  } catch (e) {
    yield put(failGetMovies(e));
  }
}

export function* getMovieById({ payload }: any) {
  console.log('sagas b4 try');

  try {
    const movieId = payload;
    const response = yield call(WebService.getMovieById, movieId);
    console.log('sagas getmovies', response);

    if (!response || !response.data) {
      throw new Error(response.problem);
    }

    yield put(successGetMovieById(response.data));
  } catch (e) {
    console.log('sagas failed get movies', e);

    yield put(failGetMovieById(e));
  }
}

export function* searchMovie({ payload }: any) {
  try {
    const query = payload;
    const response = yield call(WebService.searchMovie, query);

    if (!response || !response.data) {
      throw new Error(response.problem);
    }

    yield put(successSearchMovie(response.data.results));
  } catch (e) {
    yield put(failSearchMovie(e));
  }
}
