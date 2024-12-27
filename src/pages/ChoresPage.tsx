import React, {useEffect, useState} from "react";
import "../styles/users-page.css";
import {HomeButton} from "../components/HomeButton";
import {Chore} from "../model/Chore";
import {getChores} from "../services/ChoreService";
import {useNavigate} from "react-router-dom";

export function ChoresPage() {
    const navigate = useNavigate();
    const [chores, setChores] = useState<Chore[]>([]);

    useEffect(() => {
        getChores().then((response) => {
            console.log("response for chores = ", response);
            setChores(response.data);
        }).catch((e) => console.log(e));
    }, []);

    return (<>
        <HomeButton/>
        <h2>Chores</h2>
        <div className={"users-list-container"}>
            {chores.map(chore => (
                <h3>{chore.choreName}</h3>
            ))}
            <button onClick={() => navigate("chore-form")}>Add Chore</button>
        </div>

    </>);
}