import React from "react";
import s from './Dialogs.module.css'


const Dialogs = () => {
    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={s.dialogsItemsActive}>
                Lesha
            </div>
            <div className={s.dialog}>
                Petya
            </div>
            <div className={s.dialog}>
                Grisha
            </div>
            <div className={s.dialog}>
                Gosha
            </div>
            <div className={s.dialog}>
                4ert
            </div>
        </div>
        <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>Yo</div>
            <div className={s.message}>Hello</div>
        </div>
    </div>
}
export default Dialogs