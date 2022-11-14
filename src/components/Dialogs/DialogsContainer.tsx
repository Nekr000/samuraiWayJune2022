import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer.tsx";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = () => {
//
//
//     return <StoreContext.Consumer>
//         {
//             (store: any) => {
//                 let state = store.getState().dialogsPage
//
//                 let addMessage = () => {
//
//                     store.dispatch(addMessageActionCreator())
//                 }
//
//                 let onMessageChange = (body: any) => {
//                     store.dispatch(updateNewMessageTextActionCreator(body))
//                 }
//                 return <div className={s.dialogs}>
//                     <Dialogs addMessage={addMessage}
//                              onMessageChange={onMessageChange}
//                              messages={state.messages}
//                              dialogs={state.dialogs}
//                              newMessageText={state.newMessageText}/>
//                 </div>
//             }
//         }
//     </StoreContext.Consumer>
// }

let mapStateToProps = (state:any) => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onMessageChange:(body:any)=> {
            dispatch(updateNewMessageTextActionCreator(body))
        },
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer










