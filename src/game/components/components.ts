import {ComponentAbstract} from "./component/component.abstract";
import {ComponentEnum} from "./component/component.enum";

import {Position} from "./position/position";
import {Tag} from "./tag/tag";

const components: { [id in ComponentEnum]: ComponentAbstract<any> } = {
    [ComponentEnum.POSITION]: new Position(),
    [ComponentEnum.TAG]: new Tag()
};

export default components;
