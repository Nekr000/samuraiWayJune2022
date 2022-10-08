import React from "react";
import s from './MyPosts.module.css'
import Post from "./MyPost/Post";


const MyPosts = () => {
    return <div>
        <div className={s.posts}>
<Post/>
<Post/>
<Post/>
<Post/>
        </div>
    </div>
}
export default MyPosts