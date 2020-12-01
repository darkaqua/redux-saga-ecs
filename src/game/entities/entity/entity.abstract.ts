import {ComponentEnum} from "../../components/component/component.enum";

export abstract class EntityAbstract<TDefaultComponentData> {

    public readonly id: string;

    protected constructor(
        id: string,
        components: ComponentEnum[] = [],
        defaultData: TDefaultComponentData = undefined
    ) {
        this.id = id;
    }

}
