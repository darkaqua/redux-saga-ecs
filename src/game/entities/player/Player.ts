import {Entity} from "../Entity";
import {EntityType} from "../EntityType";
import {ComponentId, IMovement, IStats} from "../../components";

export class Player extends Entity {

    constructor(
        id: string,
        data: IMovement & IStats
    ) {
        super(id, EntityType.PLAYER);
        this.addComponent(ComponentId.Movement, { position: data.position });
        this.addComponent(ComponentId.Stats, { stats: data.stats });
    }

}
