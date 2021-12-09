import React, {useEffect, useState} from "react";
import "./../../style/index.css";
import logo from  "./../../img/cardioCenterLogo.png";
import {Link} from "react-router-dom";

export function Index (){
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
    })

    return (
        <header class="container-fluid p-0 index_fluid">
            <div class="container">
                <div class="row  ">
                    <div class="col-xl-3  logo">
                        <a href="#"><img src={logo}/></a>
                    </div>
                    <div class="col-xl-6 offset-3">
                        <ul class="menu">
                            <li><Link to="/">Головна</Link></li>
                            <li><Link to="/services">Наші послуги</Link></li>
                            <li><Link to="/reports">Звіти</Link></li>
                            <li><Link to="/contact">Про нас</Link></li>
                            <li><Link to="/news">Новини</Link></li>
                            <li>УКР</li>
                        </ul>

                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xl-6 cardioCentre">
                    <h6>Кардіо-реабілітаційний центр</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <ul class="services">
                        {
                            /* <li>Назва послуги</li>
                        <li>Назва послуги</li>
                        <li>Назва послуги</li>
                        <li>Назва послуги</li>*/
                            services.map(serv => {if(serv.department == "Кардіо-реабілітаційний центр"){
                              /*  let mass = services.slice(1, 4);
                                for(let i = 0; i < mass.length; i++) {
                                    return (
                                        <li>{mass[i]}</li>
                                    )
                                }*/
                                return (
                                    <li>{serv.title}</li>
                                )
                            }})
                        }
                    </ul>
                    <button>Всі послуги</button>
                </div>
                <div class="col-xl-6 traumaCentre">
                    <h6>Травма-реабілітаційний центр</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <ul class="services">
                        <li>Назва послуги</li>
                        <li>Назва послуги</li>
                        <li>Назва послуги</li>
                        <li>Назва послуги</li>
                    </ul>
                    <button>Всі послуги</button>
                    <ul class="social">
                        <li><a href="#"><img src="img/insta.png" alt="inst"/></a></li>
                        <li><a href="#"><img src="img/call.png" alt="call"/></a></li>
                        <li><a href="#"><img src="img/write.png" alt="write"/></a></li>
                        <li><a href="#"><img src="img/whatsApp.png" alt="whatsApp"/></a></li>
                        <li><a href="#"><img src="img/more.png" alt="more"/></a></li>
                    </ul>
                </div>
            </div>
        </header>)

}