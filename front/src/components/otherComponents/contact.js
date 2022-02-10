import React from "react";
import "./../../style/contact.css";
import "./../../media/mediaContact.css";

export function Contact () {

    return (
    <div className="row ">
        <div className="col-12 d-flex  contacts">
             <div className="address">
                <h3>Адреса компанії</h3>
                <p>Вул. Шевченка 240/1, м. Миколаїв, 54001, Україна</p>
            </div>
            <div className="phone">
                <h3>Номера телефонів</h3>
                <p><a href="tel:+380930321219">+38 093 032 12 19 </a>
                <br/> <a href="tel:+380930321912">+38 093 032 19 12</a>
                </p>
            </div>
            <div className="email">
                <h3>Додаткові способи зв'язку</h3>
                <p><a href="mailto:support@test.kz">support@test.kz </a>
                <br/> <a href="mailto:support@test.kz">support@test.kz </a></p>
            </div>
        </div>
    </div>
    )

}
export default Contact;