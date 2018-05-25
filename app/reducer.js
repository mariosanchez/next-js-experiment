import { actionTypes } from "./actions";

export const exampleInitialState = {
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  beers: {}
};

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error }
      };

    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 }
      };

    case actionTypes.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 }
      };

    case actionTypes.RESET:
      return {
        ...state,
        ...{ count: exampleInitialState.count }
      };

    case actionTypes.FETCH_BEERS_SUCCESS:
      const beers = {};

      action.data.forEach(element => {
        beers[element.id] = element;
      });

      return {
        ...state,
        ...{ beers }
      };

    case actionTypes.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: !!action.light }
      };

    default:
      return state;
  }
}

export default reducer;
