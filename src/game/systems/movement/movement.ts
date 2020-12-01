import {SystemAbstract} from "../system/system.abstract";
import {ComponentEnum} from "../../components/component/component.enum";
import {getEntity} from "../../../store/entities";
import {PositionInterface} from "../../components/position/position.interface";
import {TagInterface} from "../../components/tag/tag.interface";

export class Movement extends SystemAbstract {

    constructor() {
        super([
            ComponentEnum.POSITION,
            ComponentEnum.TAG
        ]);
    }

    updateEntity(delta: number, entityId: string) {
        const { position, tag } = getEntity<PositionInterface & TagInterface>(entityId);

        console.log(position, tag);
    }

}
