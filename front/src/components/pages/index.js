import React, {useEffect, useState} from "react";
import "./../../style/index.css";
import logo from  "./../../img/cardioCenterLogo.png";
import {Link} from "react-router-dom";
import {IndexHeader} from "./../otherComponents/indexHeader"

export function Index (){

    return (
        <IndexHeader logo={logo}></IndexHeader>
    )

}