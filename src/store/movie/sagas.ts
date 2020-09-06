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
import { discoverTitle } from '../../common/constants';
export function* getMovies() {
  try {
    let response = yield call(WebService.getMovies);
    console.log('getMovies: ', response, !response)
    if (!response || !Array.isArray(response)) {
      throw new Error(response.problem);
    }
    response = response.map((list, i) => ({ title: discoverTitle[i], list: list.data.results }));
    yield put(successGetMovies(response));
  } catch (e) {
    yield put(failGetMovies(e));
  }
}

export function* getMovieById({ payload }: any) {
  try {
    const movieId = payload;
    const response = yield call(WebService.getMovieById, movieId);

    if (!response || !response.data) {
      throw new Error(response.problem);
    }

    yield put(successGetMovieById(response.data));
  } catch (e) {
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
