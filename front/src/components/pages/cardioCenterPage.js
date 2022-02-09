import React from "react";
import Header from "./header"
import logo from  "./../../img/cardioCenterLogo.png";
import {Footer} from "../otherComponents/footer";
import WhatIsBlock from "../otherComponents/whatIsBlock";
import Recommend from "../otherComponents/recommend";
import WhyWe from "../otherComponents/whyWe";
import Map from "../otherComponents/map";
import Contact from "../otherComponents/contact";


export function CardioCenterPage (){

    const name = "cardioCenter";


    return (
        <div>
            <Header name={name} logo={logo}/>
            <main>
            <WhatIsBlock name={name}/>
            <WhyWe/>
            <div className="container">
            <Recommend/>
                <Map/>
                <Contact/>
            </div>
            </main>
            <Footer/>
        </div>
    )

}