import React, {useRef} from "react";
import s from './MyPosts.module.css'
import Post from "./MyPost/Post";



const MyPosts = (props: any) => {

    let postsElement =
        props.posts.map((p: any) => <Post message={p.message} likesCount={p.likesCount}/>);

    const newPost = useRef<HTMLTextAreaElement>(null)

    let onAddPost = () => {

        props.addPost()
        // let text = newPost?.current?.value;
        //props.dispatch(addPostActionCreator())

    }
    let onPostChange = () => {
        let text = newPost?.current?.value
        props.updateNewPostText(text)
        //props.dispatch(updateNewPostTextChangeActionCreator(text))
    }


    return <div>
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea placeholder='Enter your post'
                              ref={newPost}
                              value={props.newPostText}
                              onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add</button>

                </div>
            </div>
        </div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>
}
export default MyPosts