import './dataStore';
import {Movement} from "./game/systems/movement/movement";
import {store} from "./dataStore";
import {addEntityDispatchAction} from "./store/entities/dispatchers";
import {addEntityComponentDispatchAction} from "./store/components/dispatchers";
import {ComponentEnum} from "./game/components/component/component.enum";
import {PositionInterface} from "./game/components/position/position.interface";
import {SystemsFactory} from "./game/systems/systemsFactory";

store.dispatch(addEntityDispatchAction('player'))
store.dispatch(addEntityComponentDispatchAction<PositionInterface>(ComponentEnum.POSITION, 'player', { position: { x: 69, y: 420 } }));
store.dispatch(addEntityComponentDispatchAction(ComponentEnum.TAG, 'player'));

new Movement().update(3)

const systemsFactory = SystemsFactory.getInstance();

setInterval(() => {
    console.log('-------------------' + Date.now() + '-------------------');
    systemsFactory.update(1);
}, 1000);