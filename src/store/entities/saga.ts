import {all, put, takeEvery} from "@redux-saga/core/effects";
import {EntitiesActions, EntitiesActionTypes} from "./types";
import {IAddEntityAction, IUpdateEntityAction} from "./actions";
import {addEntityDispatchActionSuccess, updateEntityDispatchActionSuccess} from "./dispatchers";

/** Initial saga **/
export function* exampleSaga() {
    yield all([
        takeEvery(EntitiesActionTypes.ADD, add),
        takeEvery(EntitiesActionTypes.UPDATE, update),
    ])
}

/** Saga functions **/
//
function* add<T>(action: IAddEntityAction<T>) {
    yield put<EntitiesActions<T>>(addEntityDispatchActionSuccess(action.id, action.entityData));
}

function* update<T>(action: IUpdateEntityAction<T>) {
    yield put<EntitiesActions<T>>(updateEntityDispatchActionSuccess(action.id, action.entityData));
}

