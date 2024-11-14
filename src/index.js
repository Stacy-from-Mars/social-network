import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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
    {message: "You`re done great!"},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App dialogs={dialogs} messages={messages}/>
    </React.StrictMode>
);

reportWebVitals();