import {combineReducers} from 'redux';
import {entitiesReducer, exampleSaga, EntitiesState, EntitiesActions} from "./entities";
import {all} from "@redux-saga/core/effects";

/** Default State **/
export interface DefaultState {
    entities: EntitiesState
}

/** root Reducers **/
export const rootReducer = combineReducers({
    entities: entitiesReducer
});

export type Actions<T> =
    | EntitiesActions<T>

/** root Sagas **/
export function* rootSaga() {
    yield all([
        exampleSaga()
    ]);
}
