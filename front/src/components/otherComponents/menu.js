import React from "react";
import {Link} from "react-router-dom";

const Menu = (props) => {
  const name = props.name;
    return (
        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-1 col-md-6 offset-md-3
                    col-sm-6 offset-sm-3 col-3 offset-3 ">
            <input id="menu__toggle" type="checkbox"/>
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>
            <ul className={`${name}_menu`}>
                <li><Link to="/">Головна</Link></li>
                <li><Link to="/services">Послуги</Link></li>
                <li><Link to="/ourSpecialists">Спеціалісти</Link></li>
                <li><Link to="/contact">Ми</Link></li>
            </ul>
        </div>
    )
};

export default Menu;