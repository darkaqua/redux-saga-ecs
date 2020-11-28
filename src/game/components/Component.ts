import {getComponentData} from "../../store/components";
import {ComponentId} from "./ComponentId";
import {store} from "../../dataStore";
import {addComponentDispatchAction} from "../../store/components/dispatchers";
import {updateEntityDispatchAction} from "../../store/entities/dispatchers";
import {IComponents} from "./index";

export class Component<DataInterface> {

    public readonly id: ComponentId;

    constructor(
        componentId: ComponentId,
        data: IComponents
    ) {
        this.id = componentId;
        store.dispatch(addComponentDispatchAction(componentId, data))
    }

    getData() {
        return getComponentData(this.id)
    }

    getEntities() {
        return this.getData().entities;
    }

    updateEntityData<AlternateDataInterface>(entityId: string, data: AlternateDataInterface | DataInterface) {
        store.dispatch(updateEntityDispatchAction<AlternateDataInterface | DataInterface>(entityId, data));
    }

    update(delta: number): void {
        this.getEntities().forEach(entityId => this.updateEntity(delta, entityId))
    }

    updateEntity(delta: number, entityId: string) {
        console.log(ComponentId[this.id], entityId)
    }

}
