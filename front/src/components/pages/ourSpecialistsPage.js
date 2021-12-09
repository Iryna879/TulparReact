import React, {useState} from "react";
import Header from "./header"
import "./../../style/ourSpecialists.css";
import logo from  "./../../img/ourSpecialistsLogo.png";

export function OurSpecialistsPage (){

    const [name, setName] = useState("ourSpecialists");


    return (
        <div>
            <Header name={name} logo={logo}></Header>
        </div>
    )

}