import React, {useEffect, useState} from "react";
import "../styles/users-page.css";
import {HomeButton} from "../components/HomeButton";
import {getUsers} from "../services/UserService";
import {User} from "../model/User";
import {useNavigate} from "react-router-dom";

export function UsersPage() {
    const navigate = useNavigate();
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getUsers().then((response) => {
            setUsers(response.data);
        })
    }, []);

    return (<>
        <HomeButton/>
        <h2>Users</h2>
        <div className={"users-list-container"}>
            {users.map(user => (
                <button className={"user-button"} onClick={() => navigate(`/users/breakdown?user=${user.id}`)}>{user.name}</button>
            ))}
            <button className={"add-user-button"} onClick={() => navigate("user-form")}>Add User</button>
        </div>

    </>);
}