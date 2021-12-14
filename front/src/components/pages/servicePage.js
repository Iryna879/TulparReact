import React, {useState} from "react";
import Header from "./header";
import {ServicesMain} from "../otherComponents/servicesMain";
import {PriceList} from "../otherComponents/priceList";
import {Footer} from "../otherComponents/footer";
import "./../../style/servicesPage.css";
import logo from  "./../../img/servicesLogo.png";
import WhatIsBlock from "../otherComponents/whatIsBlock";
import WhyWe from "../otherComponents/whyWe";
import Recommend from "../otherComponents/recommend";
import Map from "../otherComponents/map";
import Contact from "../otherComponents/contact";

export function ServicePage (){

    const [name, setName] = useState("services");




    return (
        <div>
            <Header name={name} logo={logo}></Header>
            <main>
            <ServicesMain name={name}></ServicesMain>
            <PriceList></PriceList>
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