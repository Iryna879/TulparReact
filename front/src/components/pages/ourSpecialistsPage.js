import React from "react";
import Header from "./header"
import "./../../style/ourSpecialists.css";
import logo from  "./../../img/ourSpecialistsLogo.png";
import {Footer} from "../otherComponents/footer";
import WhyWe from "../otherComponents/whyWe";
import Recommend from "../otherComponents/recommend";
import Map from "../otherComponents/map";
import Contact from "../otherComponents/contact";

export function OurSpecialistsPage (){

    const name = "ourSpecialists";


    return (
        <div>
            <Header name={name} logo={logo}/>
            <main>
                <WhyWe/>
                <div className="container">
                    <Recommend/>
                    <Map/>
                    <Contact/>
                </div>
            </main>
            <Footer/>
        </div>
    )

}