import {EntityType, IEntityData} from "./types";
import {store} from "../../dataStore";

export const getEntities = (): [string, IEntityData][] =>
    Object.entries(store.getState().entities)

export const getEntityData = (id: string): [string, IEntityData] =>
    getEntities().find(([_id]) => id === _id);

export const getEntitiesByType = (type: EntityType): [string, IEntityData][] =>
    Object.entries(store.getState().entities).filter(([id, entityData]) => entityData.type === type);

