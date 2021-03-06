import React from "react";
import Header from "./header"
import logo from  "./../../img/ourSpecialistsLogo.png";
import {Footer} from "../otherComponents/footer";
import WhyWe from "../otherComponents/whyWe";
import Recommend from "../otherComponents/recommend";
import Map from "../otherComponents/map";
import Contact from "../otherComponents/contact";
import {OurSpecialistsPageSpecList} from "../otherComponents/ourSpecialistsPageSpecList";

const OurSpecialistsPage = () => {

    const name = "ourSpecialists";


    return (
        <div>
            <Header name={name} logo={logo}/>
            <main>
                <OurSpecialistsPageSpecList/>
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
export default OurSpecialistsPage;