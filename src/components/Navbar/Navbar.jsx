import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {refreshFriendsCreator} from "../../redux/sidebar-reducer";

const Navbar = (props) => {

    const refreshFriends = () => {
        props.dispatch(refreshFriendsCreator());
    }

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
            <h3>Friends online</h3>
        </div>
        <div className={s.friends}>
            {props.sidebar.newFriendsArray}
        </div>
        <button onClick={refreshFriends}>Refresh</button>
    </nav>
)}

export default Navbar;