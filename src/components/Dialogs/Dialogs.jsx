import React from "react";
import s from "./Dialogs.module.css";
import DialogItems from "./DialogItems/DialogItems";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItems id={d.id} name={d.name} image={d.image}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);
    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.dispatch({type: "SEND-MESSAGE"});
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", newText: text})
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.userText}>
                    <textarea ref={newMessageElement} value={props.dialogsPage.newMessageText} onChange={onMessageChange}/>
                    <button onClick={sendMessage}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;