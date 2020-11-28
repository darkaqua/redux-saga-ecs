import {all, put, takeEvery} from "@redux-saga/core/effects";
import {ComponentsActions, ComponentsActionTypes} from "./types";
import {IAddComponentAction, IAddEntityComponentAction} from "./actions";
import {
    addComponentDispatchActionSuccess,
    addEntityComponentDispatchActionSuccess, removeEntityComponentDispatchActionSuccess,
} from "./dispatchers";
import {updateEntityDispatchAction} from "../entities/dispatchers";
import {getComponentData} from "./getters";
import {EntitiesActions} from "../entities";
import {IComponents} from "../../game/components";

/** Initial saga **/
export function* componentsSaga() {
    yield all([
        takeEvery(ComponentsActionTypes.ADD, add),
        takeEvery(ComponentsActionTypes.ADD_ENTITY, addEntity),
        takeEvery(ComponentsActionTypes.REMOVE_ENTITY, removeEntity),
    ]);
}

/** Saga functions **/
//
function* add(action: IAddComponentAction) {
    yield put<ComponentsActions>(addComponentDispatchActionSuccess(action.componentId, action.defaultData));
}

function* addEntity(action: IAddEntityComponentAction) {
    const { defaultData } = getComponentData(action.componentId);
    yield put<EntitiesActions>(updateEntityDispatchAction(action.entityId, action.defaultData || defaultData))
    yield put<ComponentsActions>(addEntityComponentDispatchActionSuccess(action.componentId, action.entityId));
}

function* removeEntity(action: IAddEntityComponentAction) {
    yield put<ComponentsActions>(removeEntityComponentDispatchActionSuccess(action.componentId, action.entityId));
}
