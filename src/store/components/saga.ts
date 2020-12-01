import {all, put, takeEvery} from "@redux-saga/core/effects";
import {ComponentsActions, ComponentsActionTypes} from "./types";
import {IAddEntityComponentAction} from "./actions";
import {
    addEntityComponentDispatchActionSuccess,
    removeEntityComponentDispatchActionSuccess,
} from "./dispatchers";
import components from "../../game/components/components";
import {EntitiesActions} from "../entities";
import {updateEntityDispatchAction} from "../entities/dispatchers";

/** Initial saga **/
export function* componentsSaga() {
    yield all([
        takeEvery(ComponentsActionTypes.ADD_ENTITY, addEntity),
        takeEvery(ComponentsActionTypes.REMOVE_ENTITY, removeEntity),
    ]);
}

/** Saga functions **/
//
function* addEntity(action: IAddEntityComponentAction<any>) {
    const { defaultData } = components[action.componentEnum];
    yield put<EntitiesActions>(updateEntityDispatchAction(action.entityId, action.componentData || defaultData))
    yield put<ComponentsActions>(addEntityComponentDispatchActionSuccess(action.componentEnum, action.entityId));
}

function* removeEntity(action: IAddEntityComponentAction<any>) {
    yield put<ComponentsActions>(removeEntityComponentDispatchActionSuccess(action.componentEnum, action.entityId));
}
