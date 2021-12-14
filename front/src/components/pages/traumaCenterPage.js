import React, {useState} from "react";
import Header from "./header"
import "./../../style/traumaCenterPage.css";
import logo from  "./../../img/traumaCenterLogo.png";
import {Footer} from "../otherComponents/footer";
import WhatIsBlock from "../otherComponents/whatIsBlock";

export function TraumaCenterPage (){

    const [name, setName] = useState("traumaCenter");


    return (
        <div>
            <Header name={name} logo={logo}></Header>
            <WhatIsBlock name={name}></WhatIsBlock>
            <Footer></Footer>
        </div>
    )

}