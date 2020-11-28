
import {
    IAddEntityAction,
    IAddEntityActionSuccess,
    IDestroyEntityAction, IDestroyEntityActionSuccess,
    IUpdateEntityAction,
    IUpdateEntityActionSuccess
} from "./actions";
import {EntityType} from "../../game/entities";
import {IComponents, IMovement, IStats} from "../../game/components";

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
    [id: string]: IEntityData
}

/** Interfaces **/
//...
export interface IBasicEntityData {
    type: EntityType;
}

export type IEntityData = IBasicEntityData & IComponents;
