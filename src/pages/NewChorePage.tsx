import React, {useEffect, useState} from "react";
import {Chore} from "../model/Chore";
import {addChore} from "../services/ChoreService";
import {useNavigate} from "react-router-dom";
import {HomeButton} from "../components/HomeButton";
import {ChoreForm} from "../components/ChoreForm";

export function NewChorePage() {
    const navigate = useNavigate();

    function submitChore(chore: Chore) {
        console.log(chore);
        addChore(chore).then((response) => {
            navigate("/chores/")
        });
    }

    return (<>
        <HomeButton/>
        <ChoreForm onSubmit={submitChore}/>
    </>);
}

