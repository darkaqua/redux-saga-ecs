import {ComponentAbstract} from "../component/component.abstract";
import {ComponentEnum} from "../component/component.enum";
import {FlyInterface} from "./fly.interface";

export class Fly extends ComponentAbstract<FlyInterface> {

    constructor() {
        super(
            ComponentEnum.TAG,
            {
                tag: {
                    username: 'username'
                }
            }
        );
    }

}
