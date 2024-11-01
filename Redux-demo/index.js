// Action
const redux = require("redux");
const createStore = redux.legacy_createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: "CAKE_RESTOCKED",
    payload: qty,
  };
}

function orderIcecream(qty = 1) {
  return {
    type: "ICECREAM_ORDERED",
    payload: qty,
  };
}

function restockIcecream(qty = 1) {
  return {
    type: "ICECREAM_RESTOCKED",
    payload: qty,
  };
}

// Store

// const intialState = {
//   numberOfCakes: 10,
//   numberOfIcecreams: 20,
// };

const intialCakeState = {
  numberOfCakes: 10,
};

const intialIcecreamState = {
  numberOfIcecreams: 20,
};

// Reducer
// (previosState, action) => newState

const cakeReducer = (state = intialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return { ...state, numberOfCakes: state.numberOfCakes - 1 };

    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };

    default:
      return state;
  }
};
const icecreamReducer = (state = intialIcecreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return { ...state, numberOfIcecreams: state.numberOfIcecreams - 1 };

    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Intitial state", store.getState());

const unsubscribe = store.subscribe(() => {});

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));

const actions = bindActionCreators(
  { orderCake, restockCake, orderIcecream, restockIcecream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);
actions.orderIcecream();
actions.orderIcecream();
actions.restockIcecream(2);

unsubscribe();
