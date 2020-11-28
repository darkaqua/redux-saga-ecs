import {addEntityDispatchAction, updateEntityDispatchAction} from "../../store/entities/dispatchers";
import {getEntityData, IBasicEntityData} from "../../store/entities";
import {store} from "../../dataStore";
import {addEntityComponentDispatchAction} from "../../store/components/dispatchers";
import {EntityType} from "./EntityType";
import {ComponentId, IComponents} from "../components";

export class Entity {

    public readonly id: string;

    constructor(
        id: string,
        type: EntityType
    ) {
        this.id = id;
        store.dispatch(addEntityDispatchAction(id, { type }));
    }

    getData<T>(): T {
        return getEntityData(this.id)[1] || {} as any;
    }

    setData<T>(data: T): void {
        store.dispatch(updateEntityDispatchAction(this.id, data));
    }

    addComponent(componentId: ComponentId, defaultData?: IComponents): void {
        store.dispatch(addEntityComponentDispatchAction(componentId, this.id, defaultData));
    }

    destroy(): void {

    }

}

