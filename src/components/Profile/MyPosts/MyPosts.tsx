import React from "react";
import s from './MyPosts.module.css'
import Post from "./MyPost/Post";


const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hello World', likesCount: 15},
        {id: 2, message: 'my second post', likesCount: 11},
        {id: 3, message: 'Hello fantasy', likesCount: 0},
        {id: 4, message: 'TSX', likesCount: 202},
    ]
    let postsElement = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
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
            {postsElement}
        </div>
    </div>
}
export default MyPosts