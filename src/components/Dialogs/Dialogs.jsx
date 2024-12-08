import React from "react";
import s from "./Dialogs.module.css";
import DialogItems from "./DialogItems/DialogItems";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItems id={d.id} name={d.name} image={d.image}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.userText}>
                    <textarea ref={newMessageElement} value={state.newMessageText} onChange={onMessageChange}/>
                    <button onClick={sendMessage}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;