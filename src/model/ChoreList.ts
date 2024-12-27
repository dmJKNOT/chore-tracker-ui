import {User} from "./User";
import {Chore} from "./Chore";

export interface ChoreList {
    listName: string;
    listOwnerId: string;
    chores: Chore[];

}