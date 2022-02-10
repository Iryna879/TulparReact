import React from "react";
import {Link} from "react-router-dom";
import AuthButton from "../../auth/authButton";

const Menu = (props) => {
  const name = props.name;
    return (
        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-1 col-md-8 offset-md-1
                    col-sm-8 offset-sm-1 col-3 offset-3 ">
            <input id="menu__toggle" type="checkbox"/>
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>
            <ul className={`${name}_menu`}>
                <li><Link to="/">Головна</Link></li>
                <li><Link to="/services">Послуги</Link></li>
                <li><Link to="/ourSpecialists">Спеціалісти</Link></li>
                <li><Link to="/contact">Ми</Link></li>
                <li><AuthButton/></li>
            </ul>
        </div>
    )
};

export default Menu;