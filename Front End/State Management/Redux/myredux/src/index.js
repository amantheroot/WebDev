import { createStore, combineReducers, applyMiddleware } from "redux";
import axios from "axios";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const Introduction = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INC":
        return state + action.payload;
      case "DEC":
        return state - action.payload;
      case "MUL":
        return state * action.payload;
      case "DIV":
        return state / action.payload;
      case "POW":
        return state ** action.payload;
      default:
        return state;
    }
  };

  const store = createStore(reducer, 0);

  store.subscribe(() => {
    console.log("Store Changed: ", store.getState());
  });

  store.dispatch({ type: "INC", payload: 1 });
  store.dispatch({ type: "INC", payload: 1 });
  store.dispatch({ type: "DEC", payload: 1 });
  store.dispatch({ type: "MUL", payload: 10 });
  store.dispatch({ type: "DIV", payload: 5 });
  store.dispatch({ type: "POW", payload: 2 });
  store.dispatch({ type: "IDONTCARe", payload: 1 });
};

const MultipleReducers = () => {
  const InitialUser = {
    name: "Aman",
    age: 17,
    gender: "MALE"
  };
  const InitialMovies = [
    {
      name: "FAF",
      rating: 0
    },
    {
      name: "FAF2",
      rating: 0
    },
    {
      name: "FAF3",
      rating: 0
    },
    {
      name: "FAF4",
      rating: 0
    },
    {
      name: "FAF5",
      rating: 2
    }
  ];

  const UserReducer = (state = InitialUser, action) => {
    let Duplistate = JSON.parse(JSON.stringify(state));
    switch (action.type) {
      case "CHANGE_NAME":
        Duplistate.name = action.payload;
        break;
      case "CHANGE_AGE":
        Duplistate.age = action.payload;
        break;
      case "CHANGE_GENDER":
        Duplistate.gender = action.payload;
        break;
      default:
        break;
    }
    return Duplistate;
  };
  const MoviesReducer = (state = InitialMovies, action) => {
    let Duplistate = JSON.parse(JSON.stringify(state));
    switch (action.type) {
      case "RATE_MOVIE":
        Duplistate.push(action.payload);
        break;
      default:
        break;
    }
    return Duplistate;
  };

  const reducers = combineReducers({
    userInfo: UserReducer,
    MoviesWatched: MoviesReducer
  });

  const store = createStore(reducers);

  store.subscribe(() => {
    console.log("Store Changed: ", store.getState());
  });

  store.dispatch({ type: "CHANGE_NAME", payload: "AMANDO" });
  store.dispatch({ type: "CHANGE_AGE", payload: 18 });
  store.dispatch({ type: "CHANGE_GENDER", payload: "BISEXUAL" });
  store.dispatch({
    type: "RATE_MOVIE",
    payload: { name: "FAF6", rating: -78 }
  });
};

const MiddleWare = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INC":
        return state + action.payload;
      case "DEC":
        return state - action.payload;
      case "MUL":
        return state * action.payload;
      case "DIV":
        return state / action.payload;
      case "POW":
        return state ** action.payload;
      default:
        return state;
    }
  };

  const logger = state => next => action => {
    console.log("Logged: ");
    console.log("ACTION TYPE: ", action.type);
    console.log("ACTION PAYLOAD: ", action.payload);
    next(action);
  };
  const errorhandler = state => next => action => {
    try {
      next(action);
    } catch (error) {
      console.log("OMG WHAT NOW?! ", error);
    }
  };
  const annoyer = state => next => action => {
    //   action.type = "POW";
    next(action);
  };

  const middleware = applyMiddleware(logger, errorhandler, annoyer);

  const store = createStore(reducer, 0, middleware);

  store.subscribe(() => {
    console.log("Store Changed: ", store.getState());
  });

  store.dispatch({ type: "INC", payload: 1 });
  store.dispatch({ type: "INC", payload: 1 });
  store.dispatch({ type: "DEC", payload: 1 });
  store.dispatch({ type: "MUL", payload: 10 });
  store.dispatch({ type: "DIV", payload: 5 });
  store.dispatch({ type: "POW", payload: 2 });
  store.dispatch({ type: "IDONTCARe", payload: 1 });
};

const AsyncActions = () => {
  const InitialState = {
    users: [],
    error: null,
    fetching: false,
    fetched: false
  };

  const reducer = (state = InitialState, action) => {
    switch (action.type) {
      case "FETCH_USER_PENDING":
        return { ...state, fetching: true };
      case "FETCH_USER_REJECTED":
        return {
          ...state,
          fetching: false,
          fetched: true,
          error: action.payload
        };
      case "FETCH_USER_FULFILLED":
        return {
          ...state,
          fetching: false,
          fetched: true,
          users: action.payload
        };
      default:
        return state;
    }
  };

  const middleware = applyMiddleware(promise(), thunk, createLogger());

  const state = createStore(reducer, middleware);

  state.dispatch({
    type: "FETCH_USER",
    payload: axios.get("http://rest.learncode.academy/api/wstern/users")
  });
};

// Introduction();
MultipleReducers();
// MiddleWare();
// AsyncActions();
