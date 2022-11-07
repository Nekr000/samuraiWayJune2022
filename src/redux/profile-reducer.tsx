



const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    posts: [
        {id: 1, message: 'Hello World', likesCount: 15},
        {id: 2, message: 'my second post', likesCount: 11},
        {id: 3, message: 'Hello fantasy', likesCount: 0},
        {id: 4, message: 'TSX', likesCount: 2022},
    ],
    newPostText: '',
}

const profileReducer = (state:any = initialState, action:any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.unshift(newPost)
            state.newPostText = ''
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            break;
    }
    return state

}
export const addPostActionCreator = () => {

    return {
        type: ADD_POST
    }
}
export const updateNewPostTextChangeActionCreator = (text: any) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

export default profileReducer