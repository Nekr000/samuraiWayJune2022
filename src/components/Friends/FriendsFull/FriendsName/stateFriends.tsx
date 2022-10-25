import React from "react";
import s from './stateFriends.module.css'
import {NavLink} from "react-router-dom";


const FriendsFullFunc = (props:any) => {
    return <div className={s.item}>
        <img src={props.img}/>
        <NavLink to='friend1' className={navData => navData.isActive ? s.active : s.item}>{props.name} </NavLink>
    </div>
}


export default FriendsFullFunc
