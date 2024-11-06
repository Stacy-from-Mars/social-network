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

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
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
                <Message message="Hello!"/>
                <Message message="How are you?"/>
                <Message message="You`re done great!"/>
            </div>
        </div>
    )
}

export default Dialogs;