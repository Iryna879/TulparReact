import React from "react";
import pulse from "./../../img/pulse.png";
import cardio from "./../../img/cardioIndex.png";
import trauma from "./../../img/traumaIndex.png";
import cafe from "./../../img/cafeIndex.png";
import sauna from "./../../img/saunaIndex.png";

export function OurServicesRow (props) {
const name = props.name;
    return (
        <main>
            <div className="container-fluid p-0 serv">
                <div className="container">
                    <div className="row  ">
                        <div className="col-xl-12 ourServices">
                            <h6>Наші послуги</h6>
                        </div>
                    </div>
                    <div className="row  ourServicesPhoto">
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
                                    <img id="cardioIndex" src={cardio} alt="cardio"/>
                                        <p>Кардіо-реабілітаційний центр</p></li>


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
                                    <img src={trauma} alt="trauma"/>
                                        <p>Травма-реабілітаційний центр</p></li>

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
                                    <img src={cafe} alt="cafe"/>
                                        <p>Здорова та смачна їжа для відновлення</p></li>


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
                                    <img src={sauna} alt="sauna"/>
                                        <p>Сауна вищого класу для відновлення здоров`я</p></li>

                            </ul>
                            <button onClick={(e) => window.location.assign('http://localhost:3000/services') }>
                                Всі послуги
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )


}