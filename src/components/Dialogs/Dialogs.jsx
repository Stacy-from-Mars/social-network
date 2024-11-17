import React from "react";
import s from "./Dialogs.module.css";
import DialogItems from "./DialogItems/DialogItems";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItems id={d.id} name={d.name} image={d.image}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    let sendMessage = () => {
        let text = newMessageElement.current.value;
        props.sendMessage(text);
    }
    let newMessageElement = React.createRef();

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.userText}>
                    <textarea ref={newMessageElement}/>
                    <button onClick={sendMessage}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;