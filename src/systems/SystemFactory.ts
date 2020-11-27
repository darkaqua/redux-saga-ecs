import {Entities, EntityFactory} from "../entities";

export class SystemFactory<Data> {

    public readonly id: string;
    public readonly defaultData: Data;

    protected entity: Entities;

    constructor(
        id: string,
        defaultData?: Data
    ) {
        this.id = id;

        this.defaultData = defaultData;
    }

    loop(delta: number): void { }

    setEntity(entity: EntityFactory): void {
        this.entity = entity;
        this.entity.setData<Data>(this.defaultData);
    }

}
