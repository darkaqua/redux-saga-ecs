
import {IAddEntityAction, IAddEntityActionSuccess, IUpdateEntityAction, IUpdateEntityActionSuccess} from "./actions";
import {IMovement} from "../../game/components/movement/IMovement";
import {IStats} from "../../game/components/stats/IStats";

/** Action Types **/
export enum EntitiesActionTypes {
    ADD = 'ENTITIES@@ADD',
    ADD_SUCCESS = 'ENTITIES@@ADD_SUCCESS',

    UPDATE = 'ENTITIES@@UPDATE',
    UPDATE_SUCCESS = 'ENTITIES@@UPDATE_SUCCESS',
}

/** Action List **/
export type EntitiesActions<T> =
    | IAddEntityAction<T>
    | IUpdateEntityAction<T>

    | IAddEntityActionSuccess<T>
    | IUpdateEntityActionSuccess<T>

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
export interface IEntityData extends
    IBasicEntityData,

    IMovement,
    IStats
{}

export type EntityType = 'player' | 'mob';
