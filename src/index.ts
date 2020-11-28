
import './dataStore';

import {ComponentFactory} from "./game/components";
import {Mob, Player} from "./game/entities";
import {getEntities} from "./store/entities";

const componentFactory = new ComponentFactory();

const p = new Player('player 1', { x: 0, y: -3 });
const p1 = new Player('player 2', { x: 0, y: -92 });
const mob = new Mob('Im a mob');


setInterval(() => {
    componentFactory.update(Math.random())
    console.log('-------------------' + Date.now() + '-------------------');
    console.log(JSON.stringify(getEntities(), null, 2))
}, 1000);
