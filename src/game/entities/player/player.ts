import {EntityAbstract} from "../entity/entity.abstract";
import {ComponentEnum} from "../../components/component/component.enum";
import {PositionInterface} from "../../components/position/position.interface";
import {TagInterface} from "../../components/tag/tag.interface";

type playerType = PositionInterface & TagInterface;

export class Player extends EntityAbstract<playerType> {

    constructor(
        id: string
    ) {
        super(
            id,
            [
                ComponentEnum.POSITION,
                ComponentEnum.TAG
            ],
            {
                position: {
                    x: 69,
                    y: 420
                },
                tag: {
                    username: 'player'
                }
            }
        );
    }

}
