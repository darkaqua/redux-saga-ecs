import {ComponentEnum} from "../../components/component/component.enum";
import {getComponentEntities} from "../../../store/components";

export abstract class SystemAbstract {

    public readonly components: ComponentEnum[];

    protected constructor(
        components: ComponentEnum[] = []
    ) {
        this.components = components;
    }

    abstract updateEntity(delta: number, entityId: string);

    update(delta: number) {
        this.getEntities().map(entityId => this.updateEntity(delta, entityId));
    }

    getEntities(): string[] {
        const entityList = this.components.map(getComponentEntities).flat(2);
        const entityCountMap = new Map([...new Set(entityList)].map(x => [x, entityList.filter(y => y === x).length] ));
        return [...new Set(entityList.filter(o => entityCountMap.get(o) === this.components.length))];
    }

}
