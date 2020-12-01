import {ComponentEnum} from "../../components/component/component.enum";
import {store} from "../../../dataStore";
import {addEntityComponentDispatchAction} from "../../../store/components/dispatchers";

export abstract class EntityAbstract<TDefaultComponentData> {

    public readonly id: string;

    protected constructor(
        id: string
    ) {
        this.id = id;
    }

    addComponent<TComponentData>(componentEnum: ComponentEnum, componentData: TComponentData) {
        store.dispatch(addEntityComponentDispatchAction<TComponentData>(componentEnum, this.id, componentData))
    }

}
