import React from 'react';
import {Link} from "react-router-dom";

const ProfileButton = () => {
    return (
        <Link to='/profile'>
        <button className="btn btn-primary btn-block">
            Кабінет
        </button>
        </Link>
    )

}

export default ProfileButton;