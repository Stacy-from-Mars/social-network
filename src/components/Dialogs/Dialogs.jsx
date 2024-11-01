import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Lola
                </div>
                <div className={s.dialog}>
                    Demi
                </div>
                <div className={s.dialog}>
                    Eliza
                </div>
                <div className={s.dialog}>
                    Bella
                </div>
                <div className={s.dialog}>
                    Robin
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>You`re done great!</div>
            </div>
        </div>
    )
}

export default Dialogs;