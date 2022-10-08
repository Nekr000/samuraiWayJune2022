import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={s.profile}><img
        src='https://devby.io/storage/images/59/38/59/11/derived/05ff293929e38a14973ba4cf1c59269d.jpg'/>
        <div> ava+description</div>
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add</button>
                <button>Remove</button>
            </div>
        </div>
        <MyPosts/>
    </div>
}
export default Profile