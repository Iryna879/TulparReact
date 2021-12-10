import React from "react";
import pulse from "./../../img/pulse.png";
import cardio from "./../../img/cardio.png";
import trauma from "./../../img/trauma.png";
import cafe from "./../../img/cafe.png";
import sauna from "./../../img/sauna.png";

export function ServicesMain (props) {
    const name = props.name;
    return (
        <main>
            <div className="container-fluid p-0 servicesPhoto">
                <div className="container">
                    <div className="row  ">
                        <div className="col-xl-12">
                            <ul className={`${name}_photoServ`}>
                                <li>
                                    <div className={`${name}_redInfo`}>
                                        <div className="pulse"><img src={pulse} alt="pulse"/></div>
                                        <div className="redInfoText">
                                            <p>Кардіо-реабілітаційний центр</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.
                                                Lorem Ipsum has been the industry's standard dummy text</p>
                                        </div>
                                    </div>
                                    <p>Кардіо-реабілітаційний центр</p>
                                    <img src={cardio} alt="cardio"/>
                                    </li>


                                <li>
                                    <div className={`${name}_redInfo`}>
                                        <div className="pulse"><img src={pulse} alt="pulse"/></div>
                                        <div className="redInfoText">
                                            <p>Травма-реабілітаційний центр</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.
                                                Lorem Ipsum has been the industry's standard dummy text</p>
                                        </div>
                                    </div>
                                    <p>Травма-реабілітаційний центр</p>
                                    <img src={trauma} alt="trauma"/>
                                    </li>

                                <li>
                                    <div className={`${name}_redInfo`}>
                                        <div className="pulse"><img src={pulse} alt="pulse"/></div>
                                        <div className="redInfoText">
                                            <p>Здорова та смачна їжа для відновлення</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.
                                                Lorem Ipsum has been the industry's standard dummy text</p>
                                        </div>
                                    </div>
                                    <p>Здорова та смачна їжа для відновлення</p>
                                    <img src={cafe} alt="cafe"/>
                                    </li>


                                <li>
                                    <div className={`${name}_redInfo`}>
                                        <div className="pulse"><img src={pulse} alt="pulse"/></div>
                                        <div className="redInfoText">
                                            <p>Сауна вищого класу для відновлення здоров`я</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry.
                                                Lorem Ipsum has been the industry's standard dummy text</p>
                                        </div>
                                    </div>
                                    <p>Сауна вищого класу для відновлення здоров`я</p>
                                    <img src={sauna} alt="sauna"/>
                                    </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )


}