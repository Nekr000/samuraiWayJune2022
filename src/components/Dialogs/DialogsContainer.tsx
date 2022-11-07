import React from "react";
import s from './Dialogs.module.css'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer.tsx";
import Dialogs from "./Dialogs";


const DialogsContainer = (props: any) => {

    let state = props.store.getState().dialogsPage






    let addMessage = () => {

        props.store.dispatch(addMessageActionCreator())
    }
    let onMessageChange = (e: any) => {
        let text = e.target.value
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }


    return <div className={s.dialogs}>
 <Dialogs addMessage={addMessage}
          onMessageChange={onMessageChange}
          messages={state.messages}
          dialogs={state.dialogs}
          newMessageText={state.newMessageText}/>
    </div>
}
export default DialogsContainer










