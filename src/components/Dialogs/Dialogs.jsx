import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItems id="1" name="Lola"/>
                <DialogItems id="2" name="Demi"/>
                <DialogItems id="3" name="Eliza"/>
                <DialogItems id="4" name="Bella"/>
                <DialogItems id="5" name="Robin"/>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>You`re done great!</div>
            </div>
        </div>
    )
}

export default Dialogs;