import {EntitiesState, IEntityData} from "./types";
import {store} from "../../dataStore";
import {EntityType} from "../../game/entities";

export const getEntitiesState = (): EntitiesState =>
    store.getState().entities;

export const getEntities = <T>(): [string, T & IEntityData][] =>
    Object.entries(getEntitiesState()) as any

export const getEntityData = <T>(id: string): T & IEntityData =>
    getEntitiesState()[id] as any;

export const getEntitiesByType = (type: EntityType): [string, IEntityData][] =>
    getEntities().filter(([id, entityData]) => entityData.type === type);

