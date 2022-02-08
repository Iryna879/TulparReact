import React from "react";
import Search from "../search/search";
import LeftSide from "./leftside";


const SearchDoctor = () => {
    return (
        <div className="bg-dark container" style={{ height: "100vh" }}>
            <div>
                <div className="row m-5" style={{ maxWidth: "100%" }}>
                    <div className="col-3 col-md-3  bg-white ">
                        <LeftSide />
                    </div>
                    <div
                        className="col-9 col-md-9 "
                        style={{
                            border: "15px solid yellow ",
                            height: "80vh",
                            backgroundColor: "#6c757d",
                        }}
                    >
                        <Search />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchDoctor;
