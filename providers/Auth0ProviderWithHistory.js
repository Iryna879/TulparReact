import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Auth0ProviderWithHistory = ({ children }) => {
    const domain = process.env.REACT_APP_AUTHO_DOMAIN;
    const clientId = process.env.REACT_APP_AUTHO_CLIENT_ID;
    const audience = process.env.REACT_APP_AUTHO_AUDIENCE;
    const navigate = useNavigate();

    const onRedirectCallback = (appState) => {
        navigate(appState?.returnTo || '/profile')
    };

    return (
        <Auth0Provider
        domain={domain}
        clientId={clientId}
        audience={audience}
        redirectUri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    )
}
export default Auth0ProviderWithHistory;