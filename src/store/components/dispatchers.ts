
import {ComponentsActionTypes} from "./types";
import {
    IAddComponentAction, IAddComponentActionSuccess,
    IAddEntityComponentAction,
    IAddEntityComponentActionSuccess,
    IRemoveEntityComponentAction,
    IRemoveEntityComponentActionSuccess
} from "./actions";
import {ComponentId, IComponents} from "../../game/components";

/** Actions **/
export const addComponentDispatchAction = (
    componentId: ComponentId,
    defaultData: IComponents
): IAddComponentAction => ({
    type: ComponentsActionTypes.ADD,
    componentId,
    defaultData
});
export const addEntityComponentDispatchAction = (
    componentId: ComponentId,
    entityId: string,
    defaultData?: IComponents
): IAddEntityComponentAction => ({
    type: ComponentsActionTypes.ADD_ENTITY,
    componentId,
    entityId,
    defaultData
});
export const removeEntityComponentDispatchAction = (
    componentId: ComponentId,
    entityId: string
): IRemoveEntityComponentAction => ({
    type: ComponentsActionTypes.REMOVE_ENTITY,
    componentId,
    entityId
});

/** Saga Actions **/
export const addComponentDispatchActionSuccess = (
    componentId: ComponentId,
    defaultData: IComponents
): IAddComponentActionSuccess => ({
    type: ComponentsActionTypes.ADD_SUCCESS,
    componentId,
    defaultData
});
export const addEntityComponentDispatchActionSuccess = (
    componentId: ComponentId,
    entityId: string
): IAddEntityComponentActionSuccess => ({
    type: ComponentsActionTypes.ADD_ENTITY_SUCCESS,
    componentId,
    entityId
});
export const removeEntityComponentDispatchActionSuccess = (
    componentId: ComponentId,
    entityId: string
): IRemoveEntityComponentActionSuccess => ({
    type: ComponentsActionTypes.REMOVE_ENTITY_SUCCESS,
    componentId,
    entityId
});
