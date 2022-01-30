import React, {useEffect, useState} from 'react';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Circles } from 'react-loader-spinner';
import LogoutButton from "../../auth/logoutButton";

const ProfilePage = withAuthenticationRequired(
    () => {
        const {user} = useAuth0();
        const {name, picture, email} = user;

        useEffect(() => {
            fetch("/api/patients/testbyemail/" + email)
                .then(response => response.text())
                .then (isHaving => {
                    if(isHaving === "true") {
                        console.log(" такой уже есть ");
                    } else {
                        console.log(" в базе такого нет - перехожу к записи в базу ");
                            fetch("/api/patients",
                                {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify(user)
                                }
                            )
                                .then(res => {
                                    console.log("Result:", res);
                                    return res.json();
                                })
                                .then(user => {
                                    console.log(user);
                                })
                                .catch(err => {
                                    console.log(err);
                                });

                    }
                })
                .catch(err => {
                    console.log(err);
                });

        }, []);

        return (
            <div>
                <h1>Profile Page</h1>
                <div>
                    <img src={picture} alt="user"/>
                    <h3>{name}</h3>
                    <p>{email}</p>
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