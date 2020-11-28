import {IMovement} from "./movement/IMovement";
import {IStats} from "./stats/IStats";

export * from './ComponentId';
export * from './Component';
export * from './ComponentFactory';

export * from './movement/IMovement';
export * from './movement/Movement';

export * from './stats/IStats';
export * from './stats/Stats';

export type IComponents =
    | IMovement
    | IStats
