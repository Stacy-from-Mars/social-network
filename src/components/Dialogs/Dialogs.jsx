import React from "react";
import s from "./Dialogs.module.css";
import DialogItems from "./DialogItems/DialogItems";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItems id={d.id} name={d.name}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message}/>);

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