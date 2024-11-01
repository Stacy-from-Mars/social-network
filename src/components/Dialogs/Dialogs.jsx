import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className="s.dialogs">
            <div className="dialogs-items">
                <div className="dialog">
                    Lola
                </div>
                <div className="dialog">
                    Demi
                </div>
                <div className="dialog">
                    Eliza
                </div>
                <div className="dialog">
                    Bella
                </div>
                <div className="dialog">
                    Robin
                </div>
            </div>
            <div className="messages">
                <div className="message">Hello!</div>
                <div className="message">How are you?</div>
                <div className="message">You`re done great!</div>
            </div>
        </div>
    )
}

export default Dialogs;