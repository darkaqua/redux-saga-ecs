import {Entity} from "../Entity";
import {EntityType} from "../EntityType";
import {ComponentId, IMovement} from "../../components";

export class Player extends Entity {

    constructor(
        id: string,
        position: {
            x: number,
            y: number
        }
    ) {
        super(id, EntityType.PLAYER);
        this.addComponent(
            ComponentId.Movement,
            {
                position: {
                    ...position,
                    target: undefined
                }
            }
            );
        this.addComponent(ComponentId.Stats);
    }

}
