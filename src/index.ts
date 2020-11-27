
import {store} from "./dataStore";
import {Mob, Player} from "./game/entities";

const p = new Player('player 1');
const p1 = new Player('player 2');
const mob = new Mob('Im a mob');
p1.setData({
    position: {
        x: 4,
        y: 0
    }
})

setInterval(() => {
    p.loop(1);
    console.log(JSON.stringify(store.getState()))
}, 1000);
