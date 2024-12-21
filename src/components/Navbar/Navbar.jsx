import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
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
                        {props.sidebar.newFriendsArray.map(f => <Friends image={f.image} name={f.name}/>)}
                    </div>
                    <button onClick={props.refreshFriends}>Refresh</button>
                </nav>
            )
}

export default Navbar;