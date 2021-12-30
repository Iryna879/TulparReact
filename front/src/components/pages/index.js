import React from "react";
import "../../style/indexPage.css";
import logo from  "./../../img/cardioCenterLogo.png";
import {IndexHeader} from "../otherComponents/indexHeader";
import {OurServicesRow} from "../otherComponents/ourServicesRow";
import {Footer} from "../otherComponents/footer";
import Recommend from "../otherComponents/recommend";
import Map from "../otherComponents/map";
import Contact from "../otherComponents/contact";
import {SpecialistsIndex} from "../otherComponents/specialistsIndex";

export function Index (){
    const name = "index";

    return (
        <div>
        <IndexHeader logo={logo}/>
        <main>
        <OurServicesRow name={name}/>
                <div className="container">
                    <SpecialistsIndex/>
                    <Recommend/>
                    <Map/>
                    <Contact/>
                </div>
            </main>
        <Footer/>
        </div>
    )

}