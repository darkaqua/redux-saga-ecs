import {entitiesReducer} from "./reducer";
import {addEntityDispatchActionSuccess, updateEntityDispatchActionSuccess} from "./dispatchers";
import {entitiesDefaultState, EntitiesState} from "./types";

describe('entities reducer', () => {
    let state: EntitiesState = entitiesDefaultState();

    it('add entity', () => {
        const action = addEntityDispatchActionSuccess('id', { test: '1234' });

        state = entitiesReducer(state, action);
        expect(state[action.id]).toEqual(action.entityData);
    });
    it('update entity', () => {
        const action = updateEntityDispatchActionSuccess('id', { test: '4321' });

        state = entitiesReducer(state, action);
        expect(state[action.id]).toEqual(action.entityData);
    });
});
