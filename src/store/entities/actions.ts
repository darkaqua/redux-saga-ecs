import {EntitiesActionTypes, IEntityData} from "./types";


/** Saga Actions **/
export interface IAddEntityAction<T> {
    type: typeof EntitiesActionTypes.ADD
    id: string;
    entityData: T;
}
export interface IUpdateEntityAction<T> {
    type: typeof EntitiesActionTypes.UPDATE
    id: string;
    entityData: T;
}

/** Actions **/
export interface IAddEntityActionSuccess<T> {
    type: typeof EntitiesActionTypes.ADD_SUCCESS
    id: string;
    entityData: T;
}
export interface IUpdateEntityActionSuccess<T> {
    type: typeof EntitiesActionTypes.UPDATE_SUCCESS
    id: string;
    entityData: T;
}

