import React from "react";
import s from "./Dialogs.module.css";
import DialogItems from "./DialogItems/DialogItems";

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: "Lola"},
        {id: 2, name: "Demi"},
        {id: 3, name: "Eliza"},
        {id: 4, name: "Bella"},
        {id: 5, name: "Robin"}
    ];

    let messages = [
        {message: "Hello!"},
        {message: "How are you?"},
        {message: "You`re done great!"}
    ];

    let dialogsElements = dialogs.map(d => <DialogItems id={d.id} name={d.name}/>);

    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;