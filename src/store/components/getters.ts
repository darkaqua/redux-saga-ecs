import {store} from "../../dataStore";
import {ComponentsState, IComponentData} from "./types";
import {ComponentId} from "../../game/components";

export const getComponentsState = (): ComponentsState =>
    store.getState().components;

export const getComponentsData = (): [string | ComponentId, IComponentData<any>][] =>
    Object.entries(getComponentsState());

export const getComponentData = <DataInterface>(componentId: ComponentId): IComponentData<DataInterface> =>
    getComponentsState()[componentId];
