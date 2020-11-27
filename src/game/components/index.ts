import {Movement} from "./movement/Movement";
import {Stats} from "./stats/Stats";

export * from './movement/Movement';
export * from './stats/Stats';

export type Components =
    | Movement
    | Stats
