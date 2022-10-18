import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props: any) => {
    return <div className={s.dialog}>
        <NavLink to={'/dialogs/' + props.id}className={navData=> navData.isActive ? s.dialogsItemsActive : s.dialog}>{props.name} </NavLink>
    </div>
}

export default DialogItem