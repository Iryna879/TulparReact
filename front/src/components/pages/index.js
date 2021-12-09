import React, {useEffect, useState} from "react";
import "./../../style/index.css";
import logo from  "./../../img/cardioCenterLogo.png";
import {IndexHeader} from "./../otherComponents/indexHeader"
import {Footer} from "../otherComponents/footer";

export function Index (){

    return (
        <div>
        <IndexHeader logo={logo}></IndexHeader>
        <Footer></Footer>
        </div>
    )

}