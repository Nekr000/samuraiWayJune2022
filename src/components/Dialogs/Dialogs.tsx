import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props: any) => {
    return <div className={s.dialog}>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
}
const Message = (props: any) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Lex'},
        {id: 2, name: 'Petya'},
        {id: 3, name: 'Grisha'},
        {id: 4, name: 'Gosha'},
        {id: 5, name: 'Masha'},
    ]
    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Hello'}
    ]
    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
            <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
            <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
        </div>
        <div className={s.messages}>
            <Message message={messageData[0].message}/>
            <Message message={messageData[1].message}/>
            <Message message={messageData[2].message}/>
        </div>
    </div>
}
export default Dialogs