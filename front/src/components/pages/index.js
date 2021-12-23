import React from "react";
import "../../style/indexPage.css";
import logo from  "./../../img/cardioCenterLogo.png";
import {IndexHeader} from "../otherComponents/indexHeader";
import {OurServicesRow} from "../otherComponents/ourServicesRow";
import {Footer} from "../otherComponents/footer";
import Recommend from "../otherComponents/recommend";
import Map from "../otherComponents/map";
import Contact from "../otherComponents/contact";

export function Index (){
    const name = "index";

    return (
        <div>
        <IndexHeader logo={logo}/>
        <OurServicesRow name={name}/>
            <main>
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