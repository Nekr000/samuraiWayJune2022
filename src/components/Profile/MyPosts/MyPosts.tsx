import React, {useRef} from "react";
import s from './MyPosts.module.css'
import Post from "./MyPost/Post";
import {updateNewPostText} from "../../../redux/state";


const MyPosts = (props: any) => {


    let postsElement =
        props.posts.map((p: any) => <Post message={p.message} likesCount={p.likesCount}/>);

    const newPost = useRef<HTMLTextAreaElement>(null)

    let addPost = () => {


        let text = newPost?.current?.value;
        props.addPost(text)

    }
    let onPostChange = () => {
        let text = newPost?.current?.value
        props.updateNewPostText(text)
    }


    return <div>
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPost}
                              value={props.newPostText}
                              onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add</button>
                    <button>Remove</button>
                </div>
            </div>
        </div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>
}
export default MyPosts