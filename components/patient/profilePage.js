import React from 'react';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Circles } from 'react-loader-spinner';
import LeftSide from "./leftside";
import "./profilePage.css";

const ProfilePage = withAuthenticationRequired(
    () => {
        const {user} = useAuth0();
        const {name, picture, email} = user;

        return (
            <div>
                <h1>Особистий кабінет</h1>
                <div className="profile">
                <LeftSide />
                <div>
                    <img src={picture} alt="user"/>
                    <h3>Ім'я: {name} </h3>
                    <p>Пошта: {email}</p>
                </div>

                </div>
            </div>
        )
    },
    {
        returnTo: '/profile',
        onRedirecting: () => <Circles/>
    }
)

export default ProfilePage;