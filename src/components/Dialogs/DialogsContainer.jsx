import React from "react";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onMessageChange = (text) => {
        let action = updateNewMessageTextCreator(text);
        props.store.dispatch(action);
    }

    return <Dialogs updateNewMessageText={onMessageChange} sendMessage={sendMessage} dialogsPage={state}/>
}

export default DialogsContainer;