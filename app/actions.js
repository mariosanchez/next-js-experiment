export const actionTypes = {
  FAILURE: "FAILURE",
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  FETCH_BEER: "FETCH_BEER",
  FETCH_BEERS: "FETCH_BEERS",
  FETCH_BEERS_SUCCESS: "FETCH_BEERS_SUCCESS",
  START_CLOCK: "START_CLOCK",
  TICK_CLOCK: "TICK_CLOCK"
};

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error
  };
}

export function increment() {
  return { type: actionTypes.INCREMENT };
}

export function decrement() {
  return { type: actionTypes.DECREMENT };
}

export function reset() {
  return { type: actionTypes.RESET };
}

export function fetchBeer(id) {
  return {
    type: actionTypes.FETCH_BEER,
    id
  };
}

export function fetchBeers(page = 1, perPage = 5) {
  return {
    type: actionTypes.FETCH_BEERS,
    page,
    perPage
  };
}

export function fetchBeersSuccess(data) {
  return {
    type: actionTypes.FETCH_BEERS_SUCCESS,
    data
  };
}

export function startClock() {
  return { type: actionTypes.START_CLOCK };
}

export function tickClock(isServer) {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now()
  };
}
