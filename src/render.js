import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, sendMessage, updateNewPostText, updateNewMessageText} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} sendMessage={sendMessage} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText}/>
        </React.StrictMode>
    );
}

reportWebVitals();