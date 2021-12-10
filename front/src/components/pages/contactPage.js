import React, {useState} from "react";
import Header from "./header"
import "./../../style/contactPage.css";
import logo from  "./../../img/contactLogo.png";
import {MainContact} from "../otherComponents/mainContact";
import {Footer} from "../otherComponents/footer";

export function ContactPage (){

    const [name, setName] = useState("contact");


    return (
        <div>
            <Header name={name} logo={logo}></Header>
            <MainContact></MainContact>
            <Footer></Footer>
        </div>
    )

}