import React, {useEffect, useState} from "react";
import "../../style/indexPage.css";
import logo from  "./../../img/cardioCenterLogo.png";
import {IndexHeader} from "./../otherComponents/indexHeader";
import {OurServicesRow} from "../otherComponents/ourServicesRow";
import {Footer} from "../otherComponents/footer";
import WhatIsBlock from "../otherComponents/whatIsBlock";
import WhyWe from "../otherComponents/whyWe";
import Recommend from "../otherComponents/recommend";
import Map from "../otherComponents/map";
import Contact from "../otherComponents/contact";

export function Index (){
    const [name, setName] = useState("index");

    return (
        <div>
        <IndexHeader logo={logo}></IndexHeader>
        <OurServicesRow name={name}></OurServicesRow>
            <main>
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