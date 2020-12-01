import {all, put, takeEvery} from "@redux-saga/core/effects";
import {EntitiesActions, EntitiesActionTypes} from "./types";
import {IAddEntityAction, IDestroyEntityAction, IUpdateEntityAction} from "./actions";
import {
    addEntityDispatchActionSuccess,
    destroyEntityDispatchActionSuccess,
    updateEntityDispatchActionSuccess
} from "./dispatchers";

/** Initial saga **/
export function* entitiesSaga() {
    yield all([
        takeEvery(EntitiesActionTypes.ADD, add),
        takeEvery(EntitiesActionTypes.UPDATE, update),
        takeEvery(EntitiesActionTypes.DESTROY, destroy),
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

function* destroy(action: IDestroyEntityAction) {
    yield put<EntitiesActions>(destroyEntityDispatchActionSuccess(action.id));
}
