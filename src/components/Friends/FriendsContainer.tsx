import React from "react";
import s from './Friends.module.css'
import FrienOn from "./FriendsItem/FriendsItem";
import {connect} from "react-redux";
import Friends from "./Friends";



// const FriendsOn = (props:any) => {
//
//     let friendsElement = props.state.map((f:any) =><FrienOn name={f.name} img={f.img}/> )
//     return <div className={s.item}>
//         <h3 className={s.item }>Friends Online</h3>
//         {friendsElement}
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



const FriendsOnCOntainer = connect(mapStateToProps,mapDispatchToProps )(Friends);




export default FriendsOnCOntainer