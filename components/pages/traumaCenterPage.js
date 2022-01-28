import React from "react";
import Header from "./header"
import "./../../style/traumaCenterPage.css";
import logo from  "./../../img/traumaCenterLogo.png";
import {Footer} from "../otherComponents/footer";
import WhatIsBlock from "../otherComponents/whatIsBlock";
import Recommend from "../otherComponents/recommend";
import WhyWe from "../otherComponents/whyWe";
import Map from "../otherComponents/map";
import Contact from "../otherComponents/contact";


export function TraumaCenterPage (){

    const name= "traumaCenter";


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