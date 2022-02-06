import React from 'react';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Circles } from 'react-loader-spinner';
import LogoutButton from "../../auth/logoutButton";
import Leftside from "./leftside";

const ProfilePage = withAuthenticationRequired(
    () => {
        const {user} = useAuth0();
        const {name, picture, email, birthdate} = user;

        return (
            <div>
                <h1>Особистий кабінет</h1>
                <Leftside />
                <div>
                    <img src={picture} alt="user"/>
                    <h3>Ім'я: {name} </h3>
                    <p>Пошта: {email}</p>
                    <p>Дата народження: {birthdate}</p>
                    <LogoutButton/>
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