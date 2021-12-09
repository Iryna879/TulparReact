import React from "react";
import logo from "./../../img/contactLogo.png";
import {Link} from "react-router-dom";
import arrow from "./../../img/arrow.png";
import  "./../../style/footer.css";

export function Footer() {
    return (
        <footer className="container-fluid p-0">
            <div className="container">
                <div className="row  ">
                    <div className="col-xl-3  logoFooter">
                        <Link to="/"><img src={logo} alt="alt"/></Link>
                    </div>
                    <div className="col-xl-2  mapSite">
                        <h2>Мапа сайту</h2>
                        <ul>
                            <li><Link to="/">Головна</Link></li>
                            <li><Link to="/services">Наші послуги</Link></li>
                            <li><Link to="/reports">Звіти</Link></li>
                            <li><Link to="/contact">Про нас</Link></li>
                            <li><Link to="/news">Новини</Link></li>
                        </ul>
                    </div>

                    <div className="col-xl-2 offset-1 contactUs">
                        <h2>Зв`язатися з нами</h2>
                        <ul>
                            <li>+38 093 032 12 19</li>
                            <li>+38 093 032 19 12</li>
                            <li>support@test.kz</li>
                        </ul>
                    </div>

                    <div className="col-xl-2 offset-2 up">
                        <button><img src={arrow} alt="arrow"/></button>
                        <p>Нагору</p>
                    </div>
                </div>

                <div className="row  ">
                    <div className="col-xl-12 copyright">
                        <p>© Все права защищены 2021 “Тулпар”</p>
                    </div>
                </div>

            </div>
        </footer>

)


}