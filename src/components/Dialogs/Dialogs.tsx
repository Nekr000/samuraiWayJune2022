import React, {useRef} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {text} from "stream/consumers";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/store";


const Dialogs = (props: any) => {

    let messagesElements = props.state.messages
        .map((m: any) => <Message message={m.message}/>)
    let dialogsElements = props.state.dialogs
        .map((d: any) => <DialogItem name={d.name} id={d.id}/>)




    const newMessage = useRef<HTMLTextAreaElement>(null)

    let addMessage = () => {

        props.dispatch(addMessageActionCreator())
    }
    let onMessageChange = () => {
        let text = newMessage?.current?.value
        props.dispatch(updateNewMessageTextActionCreator(text))
    }


    return <div className={s.dialogs}>

        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messagesElements}
            <textarea ref={newMessage}
                      value={props.newMessageText}
                      onChange={onMessageChange}/>
            <button onClick={addMessage}>add</button>
        </div>
    </div>
}
export default Dialogs