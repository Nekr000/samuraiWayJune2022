import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props:any) => {

    let messagesElements = props.messages
        .map((m: any) => <Message message={m.message}/>)
    let dialogsElements = props.dialogs
        .map((d:any) => <DialogItem name={d.name} id={d.id}/>)

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