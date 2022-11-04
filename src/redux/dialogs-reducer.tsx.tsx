


const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


const dialogsReducer = (state: any, action: any) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            break;

    }
    return state
}
export const addMessageActionCreator = () => {

    return {
        type: ADD_MESSAGE
    }
}
export const updateNewMessageTextActionCreator = (text: any) => {

    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}


export default dialogsReducer
