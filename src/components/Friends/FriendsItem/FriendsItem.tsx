import React from "react";
import s from './FriendsItem.module.css'


const FrienOn = (props:any) => {
    return <div className={s.item}>
        <img src={props.img}/>
        {props.name}
    </div>
}


export default FrienOn
