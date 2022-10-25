import React from "react";
import s from './MyPosts.module.css'
import Post from "./MyPost/Post";





const MyPosts = (props:any) => {


    let postsElement =
        props.posts.map((p:any) => <Post message={p.message} likesCount={p.likesCount}/>);

let newPostElement = React.createRef();

    let addPost = () => {
        // @ts-ignore
        let text = newPostElement.current.value;
        alert(text)
    }
    

    return <div>
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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