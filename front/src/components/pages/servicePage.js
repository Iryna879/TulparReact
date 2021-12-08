import React, {useState} from "react";
import Header from "./header"
import "./../../style/servicesPage.css";

export function ServicePage (){

    const [name, setName] = useState("services");




    return (
        <div>
            <Header name={name}></Header>
        </div>
    )

}