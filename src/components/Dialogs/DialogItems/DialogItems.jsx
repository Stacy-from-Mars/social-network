import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <div>
                <img src={props.image} alt={`${props.name} avatar`}/>
            </div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItems;