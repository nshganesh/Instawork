import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import rootReducer from "./rootReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../sagas/rootSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();
const initialState = {};


const middlewares = [];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}


// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // TODO Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
          // Prevent recomputing reducers for `replaceReducer`
          shouldHotReload: false,
        })
        : compose;
/* eslint-enable */

const enhancers = [
  applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      sagaMiddleware,
      // ... other middlewares ...
      ...middlewares,
  )
];

export const configureStore = () => {

  const store = createStore(
      connectRouter(history)(rootReducer), // new root reducer with router state
      initialState,
      composeEnhancers(...enhancers),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
