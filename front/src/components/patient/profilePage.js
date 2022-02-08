import React from 'react';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Circles } from 'react-loader-spinner';
import LeftSide from "./leftside";
import "./style/profilePage.css";

const ProfilePage = withAuthenticationRequired(
    () => {
        const {user} = useAuth0();
        const {name, picture, email} = user;

        return (
            <div>
                <LeftSide />
                <h1 className="profile">Особистий кабінет</h1>
                <div>
                    <img src={picture} alt="user"/>
                    <h3>Ім'я: {name} </h3>
                    <p>Пошта: {email}</p>
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