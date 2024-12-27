import {User} from "../model/User";
import axios from "axios";
import {Chore} from "../model/Chore";

const users: User[] = [
    {
        id: "1",
        name: "Joshua",
        chores: [
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
            }
        ],
        lists: [
            {
                listName: "Garage Chore List",
                listOwnerId: "1",
                chores: [
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
                ]
            },
            {
                listName: "Bedroom Chore List",
                listOwnerId: "1",
                chores: [
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
                ]
            },
            {
                listName: "Pet Chore List",
                listOwnerId: "1",
                chores: [
                    {
                        choreId: "7",
                        choreDescription: "",
                        choreName: "Litter Boxes",
                        isCompleted: true
                    },
                ]
            },
        ]},
    {id: "2", name: "Destiny", chores: [], lists: []},
    {id: "3", name: "Zuko", chores: [], lists: []},
    {id: "4", name: "Howl", chores: [], lists: []},
];

export function getUsers(): Promise<any> {
    return axios.get("http://localhost:8080/users");
}

export function addUser(user: User): Promise<void> {
    return axios.post("http://localhost:8080/users", user);
}

export function getUserFromId(userId: number): Promise<any> {
    return axios.get("http://localhost:8080/users/" + userId);
}

export function updateUserChores(userId: number, chores: Chore[]): Promise<any> {
    console.log("wtf is userID", userId)
    return axios.put(`http://localhost:8080/users/${userId}/chores`, chores);
}