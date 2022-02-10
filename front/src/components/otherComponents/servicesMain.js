import React from "react";
import pulse from "./../../img/pulse.png";
import cardio from "./../../img/cardio.png";
import trauma from "./../../img/trauma.png";
import cafe from "./../../img/cafe.png";
import sauna from "./../../img/sauna.png";

export function ServicesMain () {
    return (

            <div className="container-fluid p-0 servicesPhoto">
                <div className="container">
                    <div className="row  ">
                        <div className="col-12">
                            <ul className={`services_photoServ`}>
                                <li>
                                    <div className={`services_redInfo`}>
                                        <div className="pulse"><img src={pulse} alt="pulse"/></div>
                                        <div className="redInfoText">
                                            <p>Кардіо-реабілітаційний центр</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.
                                                Lorem Ipsum has been the industry's standard dummy text</p>
                                        </div>
                                    </div>
                                    <p className="heading">Кардіо-реабілітаційний центр</p>
                                    <img src={cardio} className="servicesImg" alt="cardio"/>
                                    </li>


                                <li>
                                    <div className={`services_redInfo`}>
                                        <div className="pulse"><img src={pulse} alt="pulse"/></div>
                                        <div className="redInfoText">
                                            <p>Травма-реабілітаційний центр</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.
                                                Lorem Ipsum has been the industry's standard dummy text</p>
                                        </div>
                                    </div>
                                    <p className="heading">Травма-реабілітаційний центр</p>
                                    <img src={trauma} className="servicesImg"  alt="trauma"/>
                                    </li>

                                <li>
                                    <div className={`services_redInfo`}>
                                        <div className="pulse"><img src={pulse} alt="pulse"/></div>
                                        <div className="redInfoText">
                                            <p>Здорова  їжа для відновлення</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.
                                                Lorem Ipsum has been the industry's standard dummy text</p>
                                        </div>
                                    </div>
                                    <p className="heading">Здорова  їжа для відновлення</p>
                                    <img src={cafe} className="servicesImg"  alt="cafe"/>
                                    </li>


                                <li>
                                    <div className={`services_redInfo`}>
                                        <div className="pulse"><img src={pulse} alt="pulse"/></div>
                                        <div className="redInfoText">
                                            <p>Сауна вищого класу для відновлення </p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.
                                                Lorem Ipsum has been the industry's standard dummy text</p>
                                        </div>
                                    </div>
                                    <p className="heading">Сауна вищого класу для відновлення </p>
                                    <img src={sauna} className="servicesImg"  alt="sauna"/>
                                    </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

    )


}