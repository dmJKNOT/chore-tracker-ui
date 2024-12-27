import React from "react";
import "../styles/components.css";
import {useNavigate} from "react-router-dom";

export function HomeButton() {
    const navigate = useNavigate();
    return (<button className={"home-button"} onClick={() => navigate("/")}>Home</button>)
}