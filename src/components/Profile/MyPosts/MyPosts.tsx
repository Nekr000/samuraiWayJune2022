import React from "react";
import s from './MyPosts.module.css'
import Post from "./MyPost/Post";


const MyPosts = () => {
    return <div>
        <div className={s.posts}>
<Post message='leha' likesCount='15'/>
<Post message='my second post' likesCount='11'/>
<Post message='Hello World' likesCount='0'/>
<Post message='JSX' likesCount='20'/>
        </div>
    </div>
}
export default MyPosts