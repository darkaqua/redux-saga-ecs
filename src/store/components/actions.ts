import {ComponentsActionTypes} from "./types";
import {ComponentId, IComponents} from "../../game/components";


/** Saga Actions **/
export interface IAddComponentAction {
    type: typeof ComponentsActionTypes.ADD
    componentId: ComponentId;
    defaultData: IComponents;
}
export interface IAddEntityComponentAction {
    type: typeof ComponentsActionTypes.ADD_ENTITY
    componentId: ComponentId;
    entityId: string;
    defaultData: IComponents
}
export interface IRemoveEntityComponentAction {
    type: typeof ComponentsActionTypes.REMOVE_ENTITY
    componentId: ComponentId;
    entityId: string;
}

/** Actions **/
export interface IAddComponentActionSuccess {
    type: typeof ComponentsActionTypes.ADD_SUCCESS
    componentId: ComponentId;
    defaultData: IComponents;
}
export interface IAddEntityComponentActionSuccess {
    type: typeof ComponentsActionTypes.ADD_ENTITY_SUCCESS
    componentId: ComponentId;
    entityId: string;
}
export interface IRemoveEntityComponentActionSuccess {
    type: typeof ComponentsActionTypes.REMOVE_ENTITY_SUCCESS
    componentId: ComponentId;
    entityId: string;
}

