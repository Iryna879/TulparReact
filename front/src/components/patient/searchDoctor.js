import React from "react";
import Search from "../search/search";
import ProfileMenu from "./profileMenu";


const SearchDoctor = () => {
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
};

export default SearchDoctor;
