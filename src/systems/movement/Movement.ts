import {SystemFactory} from "../SystemFactory";
import {__ENTITIES_TEST_DATA} from "../../entities";
import {IMovement} from "./IMovement";

export class Movement extends SystemFactory<IMovement> {

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
        let { position } = this.entity.getData<IMovement>();

        // copy, not necessary if it comes from redux
        position = {...position }

        if(position.target) {
            return console.log(this.entity.name, ' is targeting ', position.target)
        }

        // get from redux
        const collision = Array.from(__ENTITIES_TEST_DATA.entries())
            .filter(([entityId, data]: [string, IMovement]) => data.position && data.position.x === position.x + 1)

        if(collision.length > 0)
            return this.entity.setData<IMovement>({
                position: {
                    ...position,
                    target: this.entity.id
                }
            });

        position.x++;

        this.entity.setData<IMovement>({
            position
        });
    }

}
