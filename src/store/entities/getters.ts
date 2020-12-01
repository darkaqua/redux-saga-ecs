import {store} from "../../dataStore";
import {ComponentTypes} from "../../game/components/component/component.types";

export const getEntitiesState = () =>
    store.getState().entities;

export const getEntity = <TComponentData>(entityId: string): TComponentData =>
    getEntitiesState()[entityId] as any;
