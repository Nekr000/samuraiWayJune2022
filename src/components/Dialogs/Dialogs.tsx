import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props: any) => {
    return <div className={s.dialog}>
        <NavLink to={'/dialogs/' + props.id}className={navData=> navData.isActive ? s.dialogsItemsActive : s.dialog}>{props.name} </NavLink>
    </div>
}
const Message = (props: any) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Lex'},
        {id: 2, name: 'Petya'},
        {id: 3, name: 'Grisha'},
        {id: 4, name: 'Gosha'},
        {id: 5, name: 'Masha'},
    ]
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Hello'}
    ]
    let messagesElements = messages
        .map(m => <Message message={m.message}/>)
    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messagesElements}
        </div>
    </div>
}
export default Dialogs