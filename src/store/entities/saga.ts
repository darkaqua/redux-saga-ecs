import {all, put, takeEvery} from "@redux-saga/core/effects";
import {EntitiesActions, EntitiesActionTypes} from "./types";
import {IAddEntityAction, IUpdateEntityAction} from "./actions";
import {addEntityDispatchActionSuccess, updateEntityDispatchActionSuccess} from "./dispatchers";

/** Initial saga **/
export function* entitiesSaga() {
    yield all([
        takeEvery(EntitiesActionTypes.ADD, add),
        takeEvery(EntitiesActionTypes.UPDATE, update),
    ]);
}

/** Saga functions **/
//
function* add(action: IAddEntityAction<any>) {
    yield put<EntitiesActions>(addEntityDispatchActionSuccess(action.id, action.entityData));
}

function* update(action: IUpdateEntityAction<any>) {
    yield put<EntitiesActions>(updateEntityDispatchActionSuccess(action.id, action.entityData));
}

