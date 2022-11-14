import React from "react";
import s from './FriendsFull.module.css'
import FriendsFullFunc from "./FriendsName/stateFriends";



const FriendsFull = (props:any) => {
    let FriendsFull = props.stateFriends.map((f:any) =><FriendsFullFunc name={f.name} img={f.img}/> )
    return <div className={s.item}>
        {FriendsFull}
    </div>
}
export default FriendsFull