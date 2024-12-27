import React, {useEffect, useState} from "react";
import {HomeButton} from "../components/HomeButton";
import {useNavigate} from "react-router-dom";
import {User} from "../model/User";
import {addUser} from "../services/UserService";

export function UserForm() {
    const navigate = useNavigate();
    const [user, setUser] = useState<User>({});

    useEffect(() => {
        setUser({
            name: "",
            chores: []
        })
    }, []);

    function submitUser() {
        addUser(user).then((response) => {
           navigate("/users/")
        });
    }

    return (<>
        <HomeButton/>
        <h2>Add User</h2>
        <div>
            <div>
                <label>Users Name</label>
                <input
                    value={user.name}
                    onChange={(e) => setUser({...user, name: e.target.value})}/>
            </div>
            <button onClick={submitUser}>Add</button>

        </div>
    </>);
}

