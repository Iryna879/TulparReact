import React from "react";
import Header from "./header";
import {ServicesMain} from "../otherComponents/servicesMain";
import {PriceList} from "../otherComponents/priceList";
import {Footer} from "../otherComponents/footer";
import "./../../style/servicesPage.css";
import logo from  "./../../img/servicesLogo.png";
import WhyWe from "../otherComponents/whyWe";
import Recommend from "../otherComponents/recommend";
import Map from "../otherComponents/map";
import Contact from "../otherComponents/contact";

const ServicePage = () => {

    const name = "services";

    return (
        <div>
            <Header name={name} logo={logo}/>
            <main>
            <ServicesMain />
            <PriceList/>
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

export default ServicePage;