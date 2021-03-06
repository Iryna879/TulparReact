import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import  {ServiceItem} from "./serviceItem";
import AuthButton from "../../auth/authButton";

const IndexHeader = (props) => {
    const logo = props.logo;
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("/api/services")
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
                <div className="row align-items-center ">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6 logo">
                        <Link to="/"><img src={logo} alt="logo"/></Link>
                    </div>
                    <div className="col-xl-6 offset-xl-3 col-lg-6 offset-lg-3 col-md-6 offset-md-3
                    col-sm-6 offset-sm-3 col-3 offset-3 menuDiv">
                        <input id="menu__toggle" type="checkbox"/>
                        <label className="menu__btn" htmlFor="menu__toggle">
                            <span/>
                        </label>
                        <ul className="menu">
                            <li><Link to="/">Головна</Link></li>
                            <li><Link to="/services">Послуги</Link></li>
                            <li><Link to="/ourSpecialists">Спеціалісти</Link></li>
                            <li><Link to="/contact">Ми</Link></li>
                            <li><AuthButton/></li>
                        </ul>
                    </div>
                </div>

            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 cardioCentre">
                    <h6>Кардіо-реабілітаційний центр</h6>
                    <p>Кардіореабілітація являє собою сукупність відновлювальних процедур та методик, 
                       спрямованих на відновлення природної життєдіяльності пацієнтів.</p>
                   
                    <ServiceItem services={services}  department="Кардіо-реабілітаційний центр"/>
                  <Link to='/cardioCenter'><button>Всі послуги</button></Link>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 traumaCentre">
                    <h6>Травма-реабілітаційний центр</h6>
                    <p>Реабілітація пацієнтів травматолого-ортопедичного профілю включає заходи, 
                       спрямовані на усунення наслідків травм, раніше проведених операцій тощо.</p>   
                    <ServiceItem services={services}   department="Травма-реабілітаційний центр"/>
                   <Link to='/traumaCenter'><button>Всі послуги</button></Link>


                </div>
            </div>
            </div>
        </header>
    )
}

export default IndexHeader;