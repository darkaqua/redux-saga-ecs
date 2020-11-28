import {Entity} from "./Entity";

export class EntityFactory {

    public readonly entities: { [id: string]: Entity };

    constructor() {
        this.entities = {};
    }

    addEntity(entity: Entity): Entity {
        this.entities[entity.id] = entity;
        return entity;
    }


}
