import React, {useEffect, useState} from "react";
import "./../../style/index.css";
import logo from  "./../../img/cardioCenterLogo.png";
import {IndexHeader} from "./../otherComponents/indexHeader"


export function Index (){

    return (
        <IndexHeader logo={logo}></IndexHeader>
    )

}