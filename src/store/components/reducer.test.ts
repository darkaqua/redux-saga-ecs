import {componentsReducer} from "./reducer";
import {componentsDefaultState, ComponentsState} from "./types";
import {addComponentDispatchActionSuccess, addEntityComponentDispatchActionSuccess} from "./dispatchers";
import {ComponentId} from "../../game/components";

describe('components reducer', () => {
    let state: ComponentsState = componentsDefaultState();

    it('add component', () => {
        const action = addComponentDispatchActionSuccess(
            ComponentId.Movement,
            {
                position: {
                    x: 0,
                    y: 0,
                    target: undefined
                }
            }
        );

        state = componentsReducer(state, action);
        expect(state[action.componentId].defaultData).toEqual(action.defaultData);
    });
    it('add entity component', () => {
        const action = addEntityComponentDispatchActionSuccess(
            ComponentId.Movement,
            'entityId'
        );

        state = componentsReducer(state, action);
        expect(state[action.componentId].entities)
            .toContainEqual(action.entityId);
    });
});
