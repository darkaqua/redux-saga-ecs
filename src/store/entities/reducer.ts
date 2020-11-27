import {Reducer} from 'redux'
import {produce} from 'immer'
import {EntitiesState, EntitiesActionTypes, EntitiesActions, entitiesDefaultState} from "./types";

export const entitiesReducer: Reducer<EntitiesState, EntitiesActions<any>> = (
    state = entitiesDefaultState(),
    action: EntitiesActions<any>
) => {
    switch (action.type) {
        case EntitiesActionTypes.ADD_SUCCESS:
            return produce(state, (copyState: EntitiesState) => {
                copyState[action.id] = action.entityData;
            });
        case EntitiesActionTypes.UPDATE_SUCCESS:
            return produce(state, (copyState: EntitiesState) => {
                copyState[action.id] = {
                    ...copyState[action.id],
                    ...action.entityData
                };
            });
    }
    return state
}
