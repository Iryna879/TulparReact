import React from "react";
import Option from "./option";
import "./dashboard.css";
import { Link } from "react-router-dom";

const LeftSide = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/profile" >
                        <Option Value="Персональні дані" />
                    </Link>
                </li>
                <li>
                    <Link to="/profile/searchdoctor">
                        <Option Value="Пошук лікаря" />
                    </Link>
                </li>
                <li>
                    <Link to="/profile/appointment-status">
                        <Option Value="Записи до лікарів" />
                    </Link>
                </li>

            </ul>
        </div>
    );
};

export default LeftSide;
