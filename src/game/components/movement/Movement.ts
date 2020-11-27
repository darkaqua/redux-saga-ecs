import {ComponentFactory} from "../ComponentFactory";
import {IMovement} from "./IMovement";
import {getEntities, getEntitiesByType} from "../../../store/entities";
import {IStats} from "../stats/IStats";

export class Movement extends ComponentFactory<IMovement> {

    constructor(
        // Example for entities to set information
        type?: string
    ) {
        super(
            'movement',
            {
                position: {
                    x: 0,
                    y: 0,
                    target: undefined
                }
            }
        );

    }

    loop(delta: number) {
        let { position, stats } = this.entity.getData<IMovement & IStats>();

        if(position.target) {
            return console.log(this.entity.id, ' is targeting ', position.target)
        }

        const collision = getEntities()
            .filter(([entityId, data]: [string, IMovement]) => data.position && data.position.x === position.x + 1)

        if(collision.length > 0) {
            this.entity.setData<IMovement>({
                position: {
                    ...position,
                    target: this.entity.id
                }
            });
            this.entity.setData<IStats>({
                stats: {
                    ...stats,
                    level: stats.level + 1
                }
            });
            return
        }

        this.entity.setData({
            position: {
                ...position,
                x: position.x + 1
            }
        });
    }

}
