import React from "react";
import "./style/dashboard.css";
import { Link } from "react-router-dom";
import LogoutButton from "../../auth/logoutButton";
import logo from  "./../../img/ourSpecialistsLogo.png";

const LeftSide = () => {
    return (
        <div className="container">
            <div className="row  ">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6 logo">
                    <Link to="/"><img src={logo} alt="logo"/></Link>
                </div>
                <div className="col-xl-6 offset-xl-3 col-lg-7 offset-lg-2 col-md-8 offset-md-1
                    col-sm-8 offset-sm-1 col-2 offset-4 ">
            <ul className="profileMenu">
                <li><Link to="/">Головна</Link></li>
                <li><Link to="/profile">Персональні дані</Link></li>
                <li><Link to="/profile/searchdoctor">Пошук лікаря</Link></li>
                <li><Link to="/profile/appointment-status">Записи до лікарів</Link></li>
                <li> <LogoutButton/></li>
            </ul>
                </div>

            </div>

            </div>
    );
};

export default LeftSide;
