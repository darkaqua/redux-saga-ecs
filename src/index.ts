
import './dataStore';

import {ComponentFactory, IMovement, IStats} from "./game/components";
import {Mob, Player} from "./game/entities";
import {getEntities} from "./store/entities";
import {EntityFactory} from "./game/entities/EntityFactory";

const componentFactory = new ComponentFactory();
const entityFactory = new EntityFactory();

const playerDefaults: IMovement & IStats = {
    position: {
        x: 0,
        y: -3,
        target: undefined
    },
    stats: {
        level: 10
    }
}

entityFactory.addEntity(new Player('player 1', playerDefaults));
entityFactory.addEntity(new Player('player 2', playerDefaults));
entityFactory.addEntity(new Mob('Im a mob'));

setInterval(() => {
    componentFactory.update(Math.random())
    console.log('-------------------' + Date.now() + '-------------------');
    console.log(JSON.stringify(getEntities(), null, 2))
}, 1000);
