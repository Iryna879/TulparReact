import React, {useState} from "react";
import Header from "./header"
import "./../../style/traumaCenterPage.css";
import logo from  "./../../img/traumaCenterLogo.png";
import {Footer} from "../otherComponents/footer";
import WhatIsBlock from "../otherComponents/whatIsBlock";
import Recommend from "../otherComponents/recommend";
import WhyWe from "../otherComponents/whyWe";

export function TraumaCenterPage (){

    const [name, setName] = useState("traumaCenter");


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