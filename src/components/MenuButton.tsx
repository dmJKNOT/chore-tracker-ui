import React from "react";
import "../styles/components.css";

export function MenuButton({buttontxt, className = "", onClick = () => {}}) {
    return (<button className={`menu-button ${className}`} onClick={onClick}>{buttontxt}</button>)
}