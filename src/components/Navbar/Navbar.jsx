import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const fillRandomFriends = (props) => {
    let randomArr = [];
    let friendsList = props.state.friends;
    let generateRandomUserId = function () {
        return Math.floor(Math.random() * friendsList.length) + 1;
    };

    let randomFunc = () => {
        for (let i = 0; i <= 2; i++) {
            let userId;
            while (!userId || randomArr.find(f => f.id === userId)) {
                userId = generateRandomUserId();
            }
            randomArr.push(friendsList.find(f => f.id === userId));
        }
    }
    randomFunc();
    return randomArr;
}

const Navbar = (props) => {
    let randomFriends = fillRandomFriends(props);
    let friendsArr = randomFriends.map(f => <Friends image={f.image} name={f.name}/>)

return (
    <nav className={s.navigation}>
        <div className={s.item}>
            <NavLink to="/profile">Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs">Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={"/news"}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={"/music"}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={"/settings"}>Settings</NavLink>
        </div>
        <div className={s.item}>
            <h3>Friends</h3>
        </div>
        <div className={s.friends}>
            {friendsArr}
        </div>
    </nav>
)}

export default Navbar;