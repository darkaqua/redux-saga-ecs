import {Components} from "../components";
import {addEntityDispatchAction, updateEntityDispatchAction} from "../../store/entities/dispatchers";
import {EntityType, getEntityData, IBasicEntityData} from "../../store/entities";
import {store} from "../../dataStore";

export class EntityFactory {

    public readonly id: string;

    private components: Components[];

    constructor(
        id: string,
        type: EntityType
    ) {
        this.id = id;

        this.components = [];
        store.dispatch(addEntityDispatchAction<IBasicEntityData>(this.id, { type }));
    }

    getData<T>(): T {
        return getEntityData(this.id)[1] || {} as any;
    }

    setData<T>(data: T): void {
        store.dispatch(updateEntityDispatchAction(this.id, data));
    }

    addComponent(component: Components): void {
        this.components.push(component);
        component.setEntity(this);
    }

    loop(delta: number): void {
        this.components.map(component => component.loop(delta));
    }

}

