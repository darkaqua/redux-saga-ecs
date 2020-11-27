import {EntityFactory} from "./EntityFactory";
import {Movement} from "../systems";

export class Player extends EntityFactory {

    constructor(
        id: string,
        name: string
    ) {
        super(id, name);
        this.addComponent(new Movement());
    }

}
