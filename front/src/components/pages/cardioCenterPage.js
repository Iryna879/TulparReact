import React, {useState} from "react";
import Header from "./header"
import "./../../style/cardioCenterPage.css";
import logo from  "./../../img/cardioCenterLogo.png";
import {Footer} from "../otherComponents/footer";
import WhatIsBlock from "../otherComponents/whatIsBlock";
import Recommend from "../otherComponents/recommend";
import WhyWe from "../otherComponents/whyWe";

export function CardioCenterPage (){

    const [name, setName] = useState("cardioCenter");


    return (
        <div>
            <Header name={name} logo={logo}></Header>
            <WhatIsBlock name={name}></WhatIsBlock>
            <WhyWe></WhyWe>
            <Recommend></Recommend>
            <Footer></Footer>
        </div>
    )

}