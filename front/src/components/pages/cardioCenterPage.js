import React, {useState} from "react";
import Header from "./header"
import "./../../style/cardioCenterPage.css";
import logo from  "./../../img/cardioCenterLogo.png";
import {Footer} from "../otherComponents/footer";

export function CardioCenterPage (){

    const [name, setName] = useState("cardioCenter");


    return (
        <div>
            <Header name={name} logo={logo}></Header>
            <Footer></Footer>
        </div>
    )

}