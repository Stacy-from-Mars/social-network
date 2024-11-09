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

    let dialogsData = [
        {id: 1, name: "Lola"},
        {id: 2, name: "Demi"},
        {id: 3, name: "Eliza"},
        {id: 4, name: "Bella"},
        {id: 5, name: "Robin"}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItems id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogItems id={dialogsData[1].id} name={dialogsData[1].name}/>
                <DialogItems id={dialogsData[2].id} name={dialogsData[2].name}/>
                <DialogItems id={dialogsData[3].id} name={dialogsData[3].name}/>
                <DialogItems id={dialogsData[4].id} name={dialogsData[4].name}/>
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