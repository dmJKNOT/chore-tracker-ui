import React from 'react';
import {MenuButton} from "../components/MenuButton";
import "../styles/main-menu.css";
import {useNavigate} from "react-router-dom";

export function MainMenuPage() {

    const navigate = useNavigate();

    return(<div className={"main-menu-container"}>
        <MenuButton className={"red-background"} buttontxt={"Users"} onClick={()=>navigate("/users")} />
        {/*<MenuButton className={"blue-background"} buttontxt={"Lists"}/>*/}
        <MenuButton className={"purple-background"} buttontxt={"Chores"} onClick={()=>navigate("/chores")} />
    </div>);
}

