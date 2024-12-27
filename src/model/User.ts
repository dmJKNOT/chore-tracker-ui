import {Chore} from "./Chore";
import {ChoreList} from "./ChoreList";

export interface User {
    id?: number;
    name: string;
    chores?: Chore[];
    lists?: ChoreList[];
}