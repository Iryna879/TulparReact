import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import  {ServiceItem} from "./serviceItem";
import insta from "./../../img/insta.png";
import write from "./../../img/write.png";
import whatsApp from "./../../img/whatsapp.png";
import more from "./../../img/more.png"

export function IndexHeader (props){
    const logo = props.logo;
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/services")
            .then(res => {
                // console.log(res);
                return res.json()
            })
            .then(res => {
                // console.log(res)
                setServices(res)
            })
            .catch(err =>
                console.log(err))
    }, [])

    return (
        <header className="container-fluid p-0 index_fluid">
            <div className="container">
                <div className="row  ">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6 logo">
                        <Link to="/"><img src={logo} alt="logo"/></Link>
                    </div>
                    <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-1 col-md-6 offset-md-3
                    col-sm-6 offset-sm-3 col-4 offset-2 ">
                        <input id="menu__toggle" type="checkbox"/>
                        <label className="menu__btn" htmlFor="menu__toggle">
                            <span></span>
                        </label>
                        <ul className="menu">
                            <li><Link to="/">Головна</Link></li>
                            <li><Link to="/services">Послуги</Link></li>
                            <li><Link to="/ourSpecialists">Спеціалісти</Link></li>
                            <li><Link to="/contact">Ми</Link></li>
                            <li><Link to="/news">Новини</Link></li>
                        </ul>
                    </div>
                </div>

            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 cardioCentre">
                    <h6>Кардіо-реабілітаційний центр</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the</p>

                    <ServiceItem services={services}  department="Кардіо-реабілітаційний центр"/>
                    <button onClick={() => window.location.assign('http://localhost:3000/cardioCenter') }>Всі послуги</button>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 traumaCentre">
                    <h6>Травма-реабілітаційний центр</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the</p>

                    <ServiceItem services={services}   department="Травма-реабілітаційний центр"/>
                    <button onClick={() => window.location.assign('http://localhost:3000/traumaCenter') }>Всі послуги</button>

                    <ul className="social">
                        <li><a href="https://www.instagram.com/onclinic.ua/"><img src={insta} alt="inst"/></a></li>
                        <li><a href="#"><img src={write} alt="write"/></a></li>
                        <li><a href="#"><img src={whatsApp} alt="whatsApp"/></a></li>
                        <li><a href="#"><img src={more} alt="more"/></a></li>
                    </ul>

                </div>
            </div>
            </div>
        </header>
    )


}