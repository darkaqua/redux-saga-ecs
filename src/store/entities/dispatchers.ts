
import {EntitiesActionTypes} from "./types";
import {IAddEntityAction, IAddEntityActionSuccess, IUpdateEntityAction, IUpdateEntityActionSuccess} from "./actions";

/** Actions **/
export const addEntityDispatchAction = <T>(
    id: string,
    entityData: T = {} as any
): IAddEntityAction<T> => ({
    type: EntitiesActionTypes.ADD,
    id,
    entityData
});
export const updateEntityDispatchAction = <T>(
    id: string,
    entityData: T
): IUpdateEntityAction<T> => ({
    type: EntitiesActionTypes.UPDATE,
    id,
    entityData
});

/** Saga Actions **/
export const addEntityDispatchActionSuccess = <T>(
    id: string,
    entityData: T
): IAddEntityActionSuccess<T> => ({
    type: EntitiesActionTypes.ADD_SUCCESS,
    id,
    entityData
});
export const updateEntityDispatchActionSuccess = <T>(
    id: string,
    entityData: T
): IUpdateEntityActionSuccess<T> => ({
    type: EntitiesActionTypes.UPDATE_SUCCESS,
    id,
    entityData
});

