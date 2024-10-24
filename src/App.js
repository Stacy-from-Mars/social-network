import './App.css';
import React from "react";

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src='https://img.freepik.com/free-vector/planet-mars-word-logo-design-with-mars-planet_1308-79520.jpg?semt=ais_hybrid'/>
            </header>
            <nav className="navigation">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img src=''/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My post
                    <div>
                        New post
                    </div>
                </div>
                Content
            </div>
        </div>
    );
}

export default App;
