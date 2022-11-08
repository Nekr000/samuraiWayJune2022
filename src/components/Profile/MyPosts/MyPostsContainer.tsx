import React from "react";
import {addPostActionCreator, updateNewPostTextChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store:any) => {

                let state = store.getState()
                let addPost = () => {

                    store.dispatch(addPostActionCreator())

                }
                let onPostChange = (text: any) => {
                    let action = updateNewPostTextChangeActionCreator(text)
                    store.dispatch(action)
                }


                return <MyPosts addPost={addPost}
                                updateNewPostText={onPostChange}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}/>
            }
        }

        </StoreContext.Consumer>
    )
}
export default MyPostsContainer


