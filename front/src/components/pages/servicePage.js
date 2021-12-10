import React, {useState} from "react";
import Header from "./header";
import {ServicesMain} from "../otherComponents/servicesMain";
import {Footer} from "../otherComponents/footer";
import "./../../style/servicesPage.css";
import logo from  "./../../img/servicesLogo.png";

export function ServicePage (){

    const [name, setName] = useState("services");




    return (
        <div>
            <Header name={name} logo={logo}></Header>
            <ServicesMain name={name}></ServicesMain>
            <Footer></Footer>
        </div>
    )

}