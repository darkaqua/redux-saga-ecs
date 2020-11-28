
import {Component, Movement, State} from ".";

export class ComponentFactory {

    public readonly components: Component<any>[];

    constructor() {
        this.components = [
            new Movement(),
            new State()
        ]
    }

    update(delta: number): void {
        this.components.forEach((component) => component.update(delta));
    }

}
