import React from "react";
import logo from "./../../img/contactLogo.png";
import {Link} from "react-router-dom";
import arrow from "./../../img/arrow.png";
import  "./../../style/footer.css";
import "./../../media/mediaFooter.css";

export function Footer() {

   // let scrollToTopBtn = document.getElementById("scrollToTopBtn");
    let rootElement = document.documentElement;

    function scrollToTop() {
        // Scroll to top logic
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    //scrollToTopBtn.addEventListener("click", scrollToTop);

    return (
        <footer className="container-fluid p-0">
            <div className="container">
                <div className="row  ">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-12 logoFooter">
                        <Link to="/"><img src={logo} alt="alt"/></Link>
                    </div>
                    <div className="col-4 col-sm-3 col-md-2 offset-md-1 col-lg-2 col-xl-2  mapSite">
                        <h2>Мапа сайту</h2>
                        <ul>
                            <li><Link to="/">Головна</Link></li>
                            <li><Link to="/services">Наші послуги</Link></li>
                            <li><Link to="/reports">Звіти</Link></li>
                            <li><Link to="/contact">Про нас</Link></li>
                            <li><Link to="/news">Новини</Link></li>
                        </ul>
                    </div>

                    <div className="col-xl-2 offset-xl-1 col-lg-2 offset-lg-1
                    col-md-3 offset-md-1 col-sm-3 col-6 contactUs">
                        <h2>Зв`язатися з нами</h2>
                        <ul>
                            <li><a href="tel:+380930321219">+38 093 032 12 19 </a></li>
                            <li><a href="tel:+380930321912">+38 093 032 19 12</a></li>
                            <li><a href="mailto:support@test.kz">support@test.kz </a></li>
                        </ul>
                    </div>

                    <div className="col-xl-2 offset-xl-1 col-lg-2 offset-lg-1
                    col-md-1 offset-md-1 col-sm-2 col-2 up">
                        <button id="scrollToTopBtn" onClick={() => scrollToTop()}><img src={arrow} alt="arrow"/></button>
                        <p>Нагору</p>
                    </div>
                </div>

                <div className="row  ">
                    <div className="col-12 copyright">
                        <p>© Всі права захищені 2022 “Тулпар”</p>
                    </div>
                </div>

            </div>
        </footer>

)




}