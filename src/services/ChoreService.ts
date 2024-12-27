import {Chore} from "../model/Chore";
import axios from "axios";

const chores: Chore[] = [
    {
        choreId: "1",
        choreDescription: "",
        choreName: "Trash",
        isCompleted: false
    },
    {
        choreId: "2",
        choreDescription: "",
        choreName: "Dishes",
        isCompleted: true
    },
    {
        choreId: "3",
        choreDescription: "",
        choreName: "Breakdown Cardboard",
        isCompleted: false
    },
    {
        choreId: "4",
        choreDescription: "",
        choreName: "Clear a Path",
        isCompleted: false
    },
    {
        choreId: "5",
        choreDescription: "",
        choreName: "Laundry",
        isCompleted: false
    },
    {
        choreId: "6",
        choreDescription: "",
        choreName: "Change Bedding",
        isCompleted: false
    },
    {
        choreId: "7",
        choreDescription: "",
        choreName: "Litter Boxes",
        isCompleted: true
    },
];

export function getChores() {
    return axios.get("http://localhost:8080/chores");
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => resolve(chores), 500);
    // })
}

export function addChore(chore: Chore): Promise<void> {
    return axios.post("http://localhost:8080/chores", chore);
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => resolve(), 500);
    // })
}

export function getChoreFromId(choreId: string): Promise<Chore> {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(chores.find((chore: Chore) => chore.choreId === choreId)), 500);
    })
}