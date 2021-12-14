import React, {useState} from "react";
import Header from "./header"
import "./../../style/cardioCenterPage.css";
import logo from  "./../../img/cardioCenterLogo.png";
import {Footer} from "../otherComponents/footer";
import WhatIsBlock from "../otherComponents/whatIsBlock";
import Recommend from "../otherComponents/recommend";
import WhyWe from "../otherComponents/whyWe";
import Map from "../otherComponents/map";
import Contact from "../otherComponents/contact";

export function CardioCenterPage (){

    const [name, setName] = useState("cardioCenter");


    return (
        <div>
            <Header name={name} logo={logo}></Header>
            <main>
            <WhatIsBlock name={name}></WhatIsBlock>
            <WhyWe></WhyWe>
            <div className="container">
            <Recommend></Recommend>
                <Map></Map>
                <Contact></Contact>
            </div>
            </main>
            <Footer></Footer>
        </div>
    )

}