import React, {useState} from "react";
import Header from "./header"
import "./../../cssBootstrap/bootstrap.min.css";
import "./../../style/contactPage.css";
import logo from  "./../../img/contactLogo.png";

export function ContactPage (){

    const [name, setName] = useState("contact");


    return (
        <div>
            <Header name={name} logo={logo}></Header>
        </div>
    )

}