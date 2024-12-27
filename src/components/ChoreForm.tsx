import React, {useEffect, useState} from "react";
import {HomeButton} from "./HomeButton";
import {Chore} from "../model/Chore";
import {addChore} from "../services/ChoreService";
import {useNavigate} from "react-router-dom";

export interface ChoreFormProps {
    onSubmit: (chore: Chore) => void;
}

export function ChoreForm(props: ChoreFormProps) {
    const [chore, setChore] = useState<Chore>({});

    useEffect(() => {
        setChore({
            choreName: "",
            choreDescription: "",
            isCompleted: false,
            lastCompleted: ""
        })
    }, []);

    return (<>
        <h2>Add Chore</h2>
        <div>
            <div>
                <label>Chore Name</label>
                <input
                    value={chore.choreName}
                    onChange={(e) => setChore({...chore, choreName: e.target.value})}/>
            </div>
            <div>
                <label>Chore Description</label>
                <input
                    value={chore.choreDescription}
                    onChange={(e) => setChore({...chore, choreDescription: e.target.value})}/>
            </div>
            <button onClick={() => props.onSubmit(chore)}>Add</button>

        </div>
    </>);
}

