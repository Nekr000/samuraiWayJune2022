import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props: any) => {
    let messagesElements =
        props.messages.map((m: any) => <Message message={m.message}/>)
    let dialogsElements = props.dialogs
        .map((d: any) => <DialogItem name={d.name} id={d.id}/>)

    let addMessage = () => {
        props.addMessage()
        // props.store.dispatch(addMessageActionCreator())
    }
    let onMessageChange = (text: any) => {
        // let text = e.target.value
        // props.store.dispatch(updateNewMessageTextActionCreator(text))
        props.onMessageChange(text)
    }


    return <div className={s.dialogs}>

        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messagesElements}
            <textarea placeholder='Enter your message'
                      value={props.newMessageText}
                      onChange={onMessageChange}/>
            <button onClick={addMessage}>add</button>
        </div>
    </div>
}
export default Dialogs










