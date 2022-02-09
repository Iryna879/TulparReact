import React from "react";
import "./style/profileMenu.css";
import { Link } from "react-router-dom";
import LogoutButton from "../../auth/logoutButton";
import logo from  "./../../img/ourSpecialistsLogo.png";

const ProfileMenu = () => {
    return (
        <div className="container">
            <div className="row d-flex align-items-center  ">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6 logo">
                    <Link to="/"><img src={logo} alt="logo"/></Link>
                </div>
                <div className="col-xl-6 offset-xl-3 col-lg-7 offset-lg-2 col-md-8 offset-md-1
                    col-sm-9 offset-sm-0 col-3 offset-3 ">
                    <input id="menu__toggle" type="checkbox"/>
                    <label className="menu__btn" htmlFor="menu__toggle">
                        <span/>
                    </label>
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

export default ProfileMenu;
