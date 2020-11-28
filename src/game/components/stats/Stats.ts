import {Component} from "../Component";
import {ComponentId} from "../ComponentId";
import {IStats} from "./IStats";
import {getEntityData} from "../../../store/entities";
import {IMovement} from "..";

export class State extends Component<IStats> {

    constructor() {
        super(
            ComponentId.Stats,
            {
                stats: {
                    level: 0
                }
            }
        );
    }


    updateEntity(delta: number, entityId: string) {
        let { stats } = getEntityData<IStats>(entityId);
    }

}
