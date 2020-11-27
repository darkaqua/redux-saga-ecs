import {Entities} from "../entities";
import {IEntityData} from "../../store/entities";

export class ComponentFactory<IData> {

    public readonly id: string;
    public readonly data: IData;

    protected entity: Entities;

    constructor(
        id: string,
        data?: IData
    ) {
        this.id = id;

        this.data = data;
    }

    loop(delta: number): void { }

    setEntity(entity: Entities): void {
        this.entity = entity;
        this.entity.setData(this.data);
    }

}
