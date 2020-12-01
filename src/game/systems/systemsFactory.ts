import systems from "./systems";

export class SystemsFactory {

    private static Instance: SystemsFactory;

    public static getInstance (): SystemsFactory {
        SystemsFactory.Instance = SystemsFactory.Instance || new SystemsFactory();
        return SystemsFactory.Instance;
    }

    private constructor() {

    }

    update(delta: number) {
        systems.map(system => system.update(delta));

    }

}