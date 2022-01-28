import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const  Header = (props) => {
    const {name, logo} = props;
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("/api/header")
            .then(res => {
                // console.log(res);
                return res.json()
            })
            .then(res => {
                // console.log(res)
                setItems(res)
            })
            .catch(err =>
                console.log(err))
    })

    return (
        <header className={`container-fluid p-0 ${name}_fluid`}>
            <div className="container">
                <div className="row  ">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6 logo">
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                    </div>
                    <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-1 col-md-6 offset-md-3
                    col-sm-6 offset-sm-3 col-2 offset-4 ">
                        <input id="menu__toggle" type="checkbox"/>
                        <label className="menu__btn" htmlFor="menu__toggle">
                            <span></span>
                        </label>
                        <ul className={`${name}_menu`}>
                            <li><Link to="/">Головна</Link></li>
                            <li><Link to="/services">Послуги</Link></li>
                            <li><Link to="/ourSpecialists">Спеціалісти</Link></li>
                            <li><Link to="/contact">Ми</Link></li>
                            <li><Link to="/news">Новини</Link></li>
                        </ul>
                    </div>
                </div>
                {
                    items
                        .filter(itemName => itemName.name === name)
                        .map(item =>
                                <div className="row">
                                    <div key={item._id} className={`col-12  ${name}_text`}>
                                        <h6>{item.heading}</h6>
                                        <p>{item.paragraph}</p>
                                    </div>
                                </div>
                            )
                        }
            </div>
        </header>
   )

}
export default Header;