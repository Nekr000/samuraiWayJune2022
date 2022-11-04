import React, {useRef} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer.tsx";


const Dialogs = (props: any) => {

    let state = props.store.getState().dialogsPage

    let messagesElements = state.messages
        .map((m: any) => <Message message={m.message}/>)
    let dialogsElements = state.dialogs
        .map((d: any) => <DialogItem name={d.name} id={d.id}/>)




    let addMessage = () => {

        props.store.dispatch(addMessageActionCreator())
    }
    let onMessageChange = (e: any) => {
        let text = e.target.value
        props.store.dispatch(updateNewMessageTextActionCreator(text))
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










