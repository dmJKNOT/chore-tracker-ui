import React, {useEffect, useState} from "react";
import {HomeButton} from "../components/HomeButton";
import "../styles/user-breakdown.css";
import {User} from "../model/User";
import {useLocation} from "react-router-dom";
import {getUserFromId, updateUserChores} from "../services/UserService";
import {ChoreForm} from "../components/ChoreForm";
import {Chore} from "../model/Chore";

export function UserBreakdown() {
    const location = useLocation();

    const [user, setUser] = useState<User | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [showChoreForm, setShowChoreForm] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const queryString = location.search;

        const params = new URLSearchParams(queryString);

        const userId = params.get("user");

        fetchUser(Number(userId));

    }, [location.search]);

    function fetchUser(id: number) {
        setIsLoading(true);

        getUserFromId(id).then((response) => {
            console.log("response", response);
            setUser(response.data);
            setIsLoading(false);
        });
    }

    function addChore(chore: Chore) {
        setShowChoreForm(false);
        const chores = user.chores ?? [];
        console.log(user);
        updateUserChores(user.id, [...chores, chore]).then((response) => {
            fetchUser(user.id);
        })
    }

    return (<div>
        <HomeButton/>
        {isLoading ? <h3>Loading...</h3> : <div className={"user-breakdown-page-container"}>
            <h1>{user.name}</h1>
            <div className={"breakdown-section-container"}>
                <h2 style={{textAlign: "center"}}>Chores</h2>
                {user.chores?.map(chore => (
                        <div className={"chore-row"}>
                            <input type={"checkbox"} checked={chore.isCompleted}/><h4>{chore.choreName}</h4>
                        </div>
                    ))}
                {showChoreForm ? <ChoreForm onSubmit={addChore}/> : <button onClick={() => setShowChoreForm(true)}>ADD Chore</button>}
                    </div>
                    <div className={"breakdown-section-container"}>
                <h2 style={{textAlign: "center"}}>Lists</h2>
                {user.lists?.map(list => (
                    <div>
                        <h4>{list.listName}</h4>
                        {list.chores?.map(chore => (
                            <div className={"chore-row"}>
                                <input type={"checkbox"} checked={chore.isCompleted}/><h4>{chore.choreName}</h4>
                            </div>
                        ))}
                    </div>
                ))}
                <button>Add List</button>
            </div>

        </div>}
    </div>);
}