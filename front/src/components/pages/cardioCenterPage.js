import React, {useState} from "react";
import Header from "./header"
/*import "./../../cssBootstrap/bootstrap.min.css";*/
import "./../../style/cardioCenterPage.css";
import logo from  "./../../img/cardioCenterLogo.png";

export function CardioCenterPage (){

    const [name, setName] = useState("cardioCenter");


    return (
        <div>
            <Header name={name} logo={logo}></Header>
        </div>
    )

}