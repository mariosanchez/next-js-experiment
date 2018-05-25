import { delay } from "redux-saga";
import { all, call, put, take, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import "isomorphic-unfetch";

import {
  actionTypes,
  failure,
  loadDataSuccess,
  tickClock,
  fetchBeersSuccess
} from "./actions";

es6promise.polyfill();

function* runClockSaga() {
  yield take(actionTypes.START_CLOCK);
  while (true) {
    yield put(tickClock(false));
    yield call(delay, 1000);
  }
}

function* fetchBeerSaga({ id }) {
  try {
    const res = yield fetch(`https://api.punkapi.com/v2/beers/${id}`);
    const data = yield res.json();
    yield put(fetchBeersSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* fetchBeersSaga({ page, perPage }) {
  try {
    const res = yield fetch(
      `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`
    );
    const data = yield res.json();
    yield put(fetchBeersSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* rootSaga() {
  yield all([
    call(runClockSaga),
    takeLatest(actionTypes.FETCH_BEER, fetchBeerSaga),
    takeLatest(actionTypes.FETCH_BEERS, fetchBeersSaga)
  ]);
}

export default rootSaga;
