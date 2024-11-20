import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, sendMessage, updateNewMessageText, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} sendMessage={sendMessage} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText}/>
        </React.StrictMode>
    );
}

rerenderEntireTree(state);

reportWebVitals();