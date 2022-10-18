import React from "react";
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return <div className={s.content}><img
        src='https://devby.io/storage/images/59/38/59/11/derived/05ff293929e38a14973ba4cf1c59269d.jpg'/>
        <div className={s.descriptionBlock}>
            <div> ava+description</div>
        </div>
    </div>
}
export default ProfileInfo
