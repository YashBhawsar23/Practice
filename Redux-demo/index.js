// Action
const redux = require("redux");
const createStore = redux.legacy_createStore;

const CAKE_ORDERED = "CAKE_ORDERED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

// Store

const intialState = {
  numberOfCakes: 10,
};

// Reducer
// (previosState, action) => newState

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return { ...state, numberOfCakes: state.numberOfCakes - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Intitial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Update state", store.getState())
);

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();
