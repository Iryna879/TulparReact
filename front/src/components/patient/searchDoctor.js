import React from "react";
import Search from "../search/search";
import ProfileMenu from "./profileMenu";
import {withAuthenticationRequired} from "@auth0/auth0-react";
import {Circles} from "react-loader-spinner";


const SearchDoctor = withAuthenticationRequired(
    () => {
    return (
        <>
        <ProfileMenu />
        <div className="bg-dark container-fluid" style={{ height: "100vh", marginTop: "30px" }}>
                <div className="row " >
                    <div className="col-12">
                        <Search />
                    </div>
                </div>
            </div>
        </>
    );
},
    {
        returnTo: '/profile',
        onRedirecting: () => <Circles/>
    }
)

export default SearchDoctor;
