import React, {useState} from "react";
import Header from "./header"
import "./../../style/contactPage.css";
import logo from  "./../../img/contactLogo.png";
import {Footer} from "../otherComponents/footer";
import Recommend from "../otherComponents/recommend";
import Map from "../otherComponents/map";
import Contact from "../otherComponents/contact";

export function ContactPage (){

    const [name, setName] = useState("contact");


    return (
        <div>
            <Header name={name} logo={logo}></Header>
            <main>
                <div className="container">
                    <Map></Map>
                    <Contact></Contact>
                    <Recommend></Recommend>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )

}