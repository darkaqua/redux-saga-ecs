import {ComponentFactory} from "../ComponentFactory";
import {IStats} from "./IStats";
import {getEntities, getEntitiesByType} from "../../../store/entities";

export class Stats extends ComponentFactory<IStats> {

    constructor() {
        super(
            'stats',
            {
                stats: {
                    level: 0,
                    abc: false
                }
            }
        );

    }

    loop(delta: number) {

    }

}
