// Action

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
  anotherProperty: 0,
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
