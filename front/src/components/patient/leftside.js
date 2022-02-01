import React from "react";
import Option from "./option";
import "./dashboard.css";
import { Link } from "react-router-dom";

const Leftside = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/profile" >
                        <Option Value="Personal Details" />
                    </Link>
                </li>
                <li>
                    <Link to="/profile/searchdoctor">
                        <Option Value="Search Doctor" />
                    </Link>
                </li>
                <li>
                    <Link to="/profile/appointment-status">
                        <Option Value="Appointment Status" />
                    </Link>
                </li>

            </ul>
        </div>
    );
};

export default Leftside;
