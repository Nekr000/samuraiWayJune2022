import React from "react";
import s from './Post.module.css'

const Post = (props:any) => {
    return <div className={s.item}><img
        src='https://vjoy.cc/wp-content/uploads/2020/10/foto-dlya-avatarki-dlya-parnej-v-vk011.jpg'/>
        {props.message}
        <div><button>Like {props.likesCount}</button></div>

    </div>
}
export default Post