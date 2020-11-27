import {Player} from "./player/Player";
import {Mob} from "./mob/Mob";

export * from './player/Player';
export * from './mob/Mob';

export type Entities =
    | Player
    | Mob
