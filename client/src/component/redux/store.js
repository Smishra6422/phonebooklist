import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";

import rootReducer from "./root-reducer";
import { rootSaga } from "./root-saga";

const SagaMiddleware = createSagaMiddleware();

const Middlewares = [SagaMiddleware];

if (process.env.NODE_ENV === "development") {
  Middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...Middlewares));

SagaMiddleware.run(rootSaga);

export default store;
