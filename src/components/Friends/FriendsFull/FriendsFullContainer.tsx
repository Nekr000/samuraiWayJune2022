import React from "react";
import s from './FriendsFull.module.css'
import FriendsFullFunc from "./FriendsName/stateFriends";
import {connect} from "react-redux";
import FriendsFull from "./FriendsFull";


//
// const FriendsFull = (props:any) => {
//     let FriendsFull = props.state.map((f:any) =><FriendsFullFunc name={f.name} img={f.img}/> )
//     return <div className={s.item}>
//         {FriendsFull}
//     </div>
// }

let mapStateToProps = (state:any) => {
    return {
        stateFriends: state.sideBar.stateFriends
    }
}

let mapDispatchToProps = () => {
    return {

    }
}



let FriendsFullContainer = connect(mapStateToProps,mapDispatchToProps )(FriendsFull);

export default FriendsFullContainer