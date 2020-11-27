import {Components} from "../systems";

//mock saga
export const __ENTITIES_TEST_DATA: Map<string, any> = new Map<string, any>();

export class EntityFactory {

    public readonly id: string;
    public readonly name: string;

    private components: Components[];

    constructor(
        id: string,
        name: string
    ) {
        this.id = id;
        this.name = name;

        this.components = [];

        __ENTITIES_TEST_DATA.set(id, {});
    }

    getData<T>(): T {
        return __ENTITIES_TEST_DATA.get(this.id);
    }

    setData<T>(data: T): void {
        __ENTITIES_TEST_DATA.set(this.id, {
            ...__ENTITIES_TEST_DATA.get(this.id),
            ...data
        })
    }

    addComponent(component: Components): void {
        this.components.push(component);
        component.setEntity(this);
    }

    loop(delta: number): void {
        this.components.map(component => component.loop(delta));
    }

}

