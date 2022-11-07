


const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
    dialogs: [
        {id: 1, name: 'Lex'},
        {id: 2, name: 'Petya'},
        {id: 3, name: 'Grisha'},
        {id: 4, name: 'Gosha'},
        {id: 5, name: 'Masha'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Hello'},
        {id: 3, message: 'number 27'},
    ],
    newMessageText: '',
}


const dialogsReducer = (state: any = initialState, action: any) => {

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
