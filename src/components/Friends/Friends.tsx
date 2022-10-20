import React from "react";
import s from './Friends.module.css'
import FrienOn from "./FriendsItem/FriendsItem";



const Friends = (props:any) => {

    let friendsElement = props.state.map((f:any) =><FrienOn name={f.name} img={f.img}/> )
    return <div className={s.item}>
        <h3 className={s.item }>Friends Online</h3>
        {friendsElement}
    </div>
}
export default Friends