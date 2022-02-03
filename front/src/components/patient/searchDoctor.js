import React from "react";
import Search from "../search/search";
import Leftside from "./leftside";


const SearchDoctor = () => {
    return (
        <div className="bg-dark" style={{ height: "100vh" }}>
            <div>
                <div className="row m-5" style={{ maxWidth: "100%" }}>
                    <div className="col-3 col-md-3 p-4 bg-white ">
                        <Leftside />
                    </div>
                    <div
                        className="col-9 col-md-9 p-4"
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
