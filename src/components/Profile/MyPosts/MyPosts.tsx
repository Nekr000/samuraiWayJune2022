import React from "react";
import s from './MyPosts.module.css'
import Post from "./MyPost/Post";


const MyPosts = () => {
    let postData = [
        {id: 1, message: 'Hello World', likesCount: 15},
        {id: 2, message: 'my second post', likesCount: 11},
        {id: 3, message: 'Hello fantasy', likesCount: 0},
        {id: 4, message: 'TSX', likesCount: 202},
    ]
    return <div>
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add</button>
                    <button>Remove</button>
                </div>
            </div>
        </div>
        <div className={s.posts}>
            <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
            <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            <Post message={postData[2].message} likesCount={postData[2].likesCount}/>
            <Post message={postData[3].message} likesCount={postData[3].likesCount}/>
        </div>
    </div>
}
export default MyPosts