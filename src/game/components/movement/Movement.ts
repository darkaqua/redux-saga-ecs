
import {getEntities, getEntityData} from "../../../store/entities";
import {IMovement} from "./IMovement";
import {ComponentId} from "../ComponentId";
import {Component} from "../Component";
import {IStats} from "../stats/IStats";

export class Movement extends Component<IMovement> {

    constructor() {
        super(
            ComponentId.Movement,
            {
                position: {
                    x: 0,
                    y: 0,
                    target: undefined
                }
            }
        );
    }

    updateEntity(delta: number, entityId: string) {
        let { position, stats, type } = getEntityData<IMovement & IStats>(entityId);

        const collidedEntity = getEntities<IMovement>()
            .find(([entityId, data]) => data.position && data.position.x === position.x + 1)

        if(collidedEntity && stats) {
            this.updateEntityData<IStats>(entityId, {
                stats: {
                    level: stats.level + 1
                }
            });
        }

        this.updateEntityData(entityId, {
            position: {
                ...position,
                x: position.x + 1
            }
        });
    }

}
