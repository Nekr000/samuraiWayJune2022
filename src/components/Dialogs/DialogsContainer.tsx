import React from "react";
import s from './Dialogs.module.css'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer.tsx";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {


    return <StoreContext.Consumer>
        {
            (store:any)  => {
            let state = store.getState().dialogsPage

            let addMessage = () => {

                store.dispatch(addMessageActionCreator())
            }

            let onMessageChange = (e: any) => {
                let text = e.target.value
                store.dispatch(updateNewMessageTextActionCreator(text))
            }
            return <div className={s.dialogs}>
                <Dialogs addMessage={addMessage}
                         onMessageChange={onMessageChange}
                         messages={state.messages}
                         dialogs={state.dialogs}
                         newMessageText={state.newMessageText}/>
            </div>
        }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer










