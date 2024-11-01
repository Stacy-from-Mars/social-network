import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1">Lola</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Demi</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Eliza</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Bella</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Robin</NavLink>
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