import {Entity} from "../Entity";
import {EntityType} from "../EntityType";
import {ComponentId} from "../../components";

export class Mob extends Entity {

    constructor(
        id: string
    ) {
        super(id, EntityType.MOB);
        this.addComponent(ComponentId.Movement);
    }

}
