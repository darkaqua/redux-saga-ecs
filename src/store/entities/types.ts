
import {
    IAddEntityAction,
    IAddEntityActionSuccess,
    IDestroyEntityAction, IDestroyEntityActionSuccess,
    IUpdateEntityAction,
    IUpdateEntityActionSuccess
} from "./actions";
import {ComponentTypes} from "../../game/components/component/component.types";

/** Action Types **/
export enum EntitiesActionTypes {
    ADD = 'ENTITIES@@ADD',
    ADD_SUCCESS = 'ENTITIES@@ADD_SUCCESS',

    UPDATE = 'ENTITIES@@UPDATE',
    UPDATE_SUCCESS = 'ENTITIES@@UPDATE_SUCCESS',

    DESTROY = 'ENTITIES@@DESTROY',
    DESTROY_SUCCESS = 'ENTITIES@@DESTROY_SUCCESS',
}

/** Action List **/
export type EntitiesActions =
    | IAddEntityAction<any>
    | IAddEntityActionSuccess<any>

    | IUpdateEntityAction<any>
    | IUpdateEntityActionSuccess<any>

    | IDestroyEntityAction
    | IDestroyEntityActionSuccess

/** Default State Values **/
export const entitiesDefaultState = (): EntitiesState => ({ });

/** State **/
export interface EntitiesState {
    [id: string]: ComponentTypes
}
