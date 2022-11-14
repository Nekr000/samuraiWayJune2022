import React from "react";
import {addPostActionCreator, updateNewPostTextChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store:any) => {
//
//                 let state = store.getState()
//                 let addPost = () => {
//
//                     store.dispatch(addPostActionCreator())
//
//                 }
//                 let onPostChange = (text: any) => {
//                     let action = updateNewPostTextChangeActionCreator(text)
//                     store.dispatch(action)
//                 }
//
//
//                 return <MyPosts addPost={addPost}
//                                 updateNewPostText={onPostChange}
//                                 posts={state.profilePage.posts}
//                                 newPostText={state.profilePage.newPostText}/>
//             }
//         }
//
//         </StoreContext.Consumer>
//     )
// }
let mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text: any) => {
            let action = updateNewPostTextChangeActionCreator(text)
            dispatch(action)
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer


