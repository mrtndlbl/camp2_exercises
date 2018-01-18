import { createStore } from "redux";

const initialState = {
  value: 0
};

function counterReducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        value: state.value + 1
      };
    case 'DECREMENT':
      return {
        value: state.value - 1
      };
    default:
      return state;
  }
}

export const store = createStore(counterReducer);
