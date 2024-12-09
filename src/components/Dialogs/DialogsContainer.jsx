import React from "react";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {store => {
            let state = store.getState().dialogsPage;

            let sendMessage = () => {
                store.dispatch(sendMessageCreator());
            }

            let onMessageChange = (text) => {
                let action = updateNewMessageTextCreator(text);
                store.dispatch(action);
            }
            return <Dialogs updateNewMessageText={onMessageChange}
                            sendMessage={sendMessage}
                            dialogsPage={state}/>
        }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;