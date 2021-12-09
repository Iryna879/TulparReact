import React from "react";
import drug from "./../../img/drug.png";
import southClinic from "./../../img/southClinic.png";
import pharmacy from "./../../img/pharmacy.png";
import cross from "./../../img/cross.png";
import pharmCross from "./../../img/pharmCross.png";

export function MainContact () {

    return (
        <main>
        <div className="container">
            <div className="row ">
                <div className="col-xl-12 map">
                    <h6>Контакти</h6>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10888.833651309846!2d31.966696592038534!3d46.97724095674197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1637686787031!5m2!1suk!2sua"
                       allowFullScreen = "" loading = "lazy"></iframe>
                </div>
            </div>

            <div className="row ">
                <div className="col-xl-12 d-flex  contacts">
                    <div className="address">
                        <h3>Адреса компанії</h3>
                        <p>Вул. Шевченка 240/1, м. Миколаїв, 54001, Україна</p>
                    </div>
                    <div className="phone">
                        <h3>Номера телефонів</h3>
                        <p>+38 093 032 12 19
                            +38 093 032 19 12</p>
                    </div>
                    <div className="email">
                        <h3>Додаткові способи зв`язку</h3>
                        <p>support@test.kz
                            support@test.kz</p>
                    </div>
                </div>
            </div>

            <div className="row ">
                <div className="col-xl-12  recommend">
                    <h6>Нас рекомендують</h6>
                    <ul>
                        <li><img src={drug} alt="drug"/></li>
                        <li><img src={southClinic} alt="south"/></li>
                        <li><img src={pharmacy} alt="pharm"/></li>
                        <li><img src={cross} alt="cross"/></li>
                        <li><img src={pharmCross} alt="pharm"/></li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
)


}