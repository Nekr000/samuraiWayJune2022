import React from "react";
import s from './Post.module.css'

const Post = () => {
    return <div className={s.item}><img
        src='https://vjoy.cc/wp-content/uploads/2020/10/foto-dlya-avatarki-dlya-parnej-v-vk011.jpg'/>
        Post Name
        <div><button>Like</button></div>
    </div>
}
export default Post