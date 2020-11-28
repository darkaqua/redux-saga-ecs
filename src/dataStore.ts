import createSagaMiddleware from "redux-saga";
import {applyMiddleware, createStore, Store} from "redux";
import thunk from "redux-thunk";
import {Actions, DefaultState, rootReducer, rootSaga} from "./store";


/** Saga init **/
const sagaMiddleware = createSagaMiddleware();

/** Store creation **/
export const store: Store<DefaultState, Actions> = createStore<DefaultState, Actions, any, any>(
    rootReducer,
    applyMiddleware(thunk, sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
