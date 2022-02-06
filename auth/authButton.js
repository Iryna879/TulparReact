import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from "./loginButton";
import ProfileButton from "./profileButton";

const AuthButton = () => {
    const { isAuthenticated } = useAuth0();

    return isAuthenticated ? <ProfileButton/> : <LoginButton/>
}

export default AuthButton;