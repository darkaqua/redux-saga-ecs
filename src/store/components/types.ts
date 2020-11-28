
import {
    IAddComponentAction,
    IAddComponentActionSuccess,
    IAddEntityComponentAction,
    IAddEntityComponentActionSuccess,
    IRemoveEntityComponentAction,
    IRemoveEntityComponentActionSuccess
} from "./actions";
import {ComponentId} from "../../game/components";

/** Action Types **/
export enum ComponentsActionTypes {
    ADD = 'COMPONENTS@@ADD',
    ADD_SUCCESS = 'COMPONENTS@@ADD_SUCCESS',

    ADD_ENTITY = 'COMPONENTS@@ADD_ENTITY',
    ADD_ENTITY_SUCCESS = 'COMPONENTS@@ADD_ENTITY_SUCCESS',

    REMOVE_ENTITY = 'COMPONENTS@@REMOVE_ENTITY',
    REMOVE_ENTITY_SUCCESS = 'COMPONENTS@@REMOVE_ENTITY_SUCCESS'
}

/** Action List **/
export type ComponentsActions =
    | IAddComponentAction
    | IAddComponentActionSuccess

    | IAddEntityComponentAction
    | IAddEntityComponentActionSuccess

    | IRemoveEntityComponentAction
    | IRemoveEntityComponentActionSuccess

/** Default State Values **/
export const componentsDefaultState = (): ComponentsState => <ComponentsState>({ });

/** State **/
export type ComponentsState = {
    [id in ComponentId]: IComponentData<any>;
};

/** Interfaces **/
//...
export interface IComponentData<DataInterface> {
    entities: string[];
    defaultData: DataInterface
}
