import {EntityFactory} from "../EntityFactory";
import {Movement, Stats} from "../../components";

export class Player extends EntityFactory {

    constructor(
        id: string
    ) {
        super(id, 'player');
        this.addComponent(new Movement('test'));
        this.addComponent(new Stats());
    }

}
