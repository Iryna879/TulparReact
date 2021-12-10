import React, {useEffect, useState} from "react";
import "../../style/indexPage.css";
import logo from  "./../../img/cardioCenterLogo.png";
import {IndexHeader} from "./../otherComponents/indexHeader";
import {OurServicesRow} from "../otherComponents/ourServicesRow";
import {Footer} from "../otherComponents/footer";

export function Index (){
    const [name, setName] = useState("index");

    return (
        <div>
        <IndexHeader logo={logo}></IndexHeader>
        <OurServicesRow name={name}></OurServicesRow>
        <Footer></Footer>
        </div>
    )

}