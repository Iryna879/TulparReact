import React, {useState} from "react";
import Header from "./header"
import {Footer} from "../otherComponents/footer";
import "./../../style/servicesPage.css";
import logo from  "./../../img/servicesLogo.png";

export function ServicePage (){

    const [name, setName] = useState("services");




    return (
        <div>
            <Header name={name} logo={logo}></Header>
            <Footer></Footer>
        </div>
    )

}