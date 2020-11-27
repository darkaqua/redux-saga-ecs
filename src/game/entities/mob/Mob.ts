import {EntityFactory} from "../EntityFactory";
import {Movement, Stats} from "../../components";

export class Mob extends EntityFactory {

    constructor(
        id: string
    ) {
        super(id, 'mob');
        this.addComponent(new Stats());
    }

}
