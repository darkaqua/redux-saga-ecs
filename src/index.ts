import {Player} from "./entities/Player";
import {IMovement} from "./systems/movement/IMovement";


const p = new Player('unknown', 'player');
const p1 = new Player('undefined', 'player2');
p1.setData<IMovement>({
    position: {
        x: 4,
        y: 0
    }
})

setInterval(() => {
    p.loop(1);

    console.log(p.getData())
}, 1000)
