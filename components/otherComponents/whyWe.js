import React from "react";
import "./../../style/whyWe.css";
import mind from "./../../img/mind.png";
import bed from "./../../img/bed.png";
import smile from "./../../img/smile.png";
import like from "./../../img/like.png";
import "./../../media/mediaWhyWe.css";

export function WhyWe () {

    return (
        <div className="container-fluid p-0 whyWeFluid">
            <div className="container">
                <div className="row  ">
                    <div className="col-12 whyWe">
                        <h6>Чому ми?</h6>
                        <ul className="benefits">
                            <li><img src={mind} alt="mind"/><h1>Перевага 1</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text</p></li>
                            <li><img src={bed} alt="bed"/><h1>Перевага 2</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text</p></li>
                            <li><img src={smile} alt="smile"/><h1>Перевага 3</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text</p></li>
                            <li><img src={like} alt="like"/><h1>Перевага 4</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default WhyWe;