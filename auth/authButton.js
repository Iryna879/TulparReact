import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from "./logoutButton";
import LoginButton from "./loginButton";

const AuthButton = () => {
    const { isAuthenticated } = useAuth0();

    return isAuthenticated ? <LogoutButton/> : <LoginButton/>
}

export default AuthButton;