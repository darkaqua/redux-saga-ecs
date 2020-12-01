import {EntitiesActionTypes} from "./types";


/** Saga Actions **/
export interface IAddEntityAction<TEntityData> {
    type: typeof EntitiesActionTypes.ADD
    id: string;
    entityData: TEntityData;
}
export interface IUpdateEntityAction<TEntityData> {
    type: typeof EntitiesActionTypes.UPDATE
    id: string;
    entityData: TEntityData;
}
export interface IDestroyEntityAction {
    type: typeof EntitiesActionTypes.DESTROY
    id: string;
}

/** Actions **/
export interface IAddEntityActionSuccess<TEntityData> {
    type: typeof EntitiesActionTypes.ADD_SUCCESS
    id: string;
    entityData: TEntityData;
}
export interface IUpdateEntityActionSuccess<TEntityData> {
    type: typeof EntitiesActionTypes.UPDATE_SUCCESS
    id: string;
    entityData: TEntityData;
}
export interface IDestroyEntityActionSuccess {
    type: typeof EntitiesActionTypes.DESTROY_SUCCESS
    id: string;
}

