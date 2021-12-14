import React from "react";
import "./../../style/whyWe.css";
import ellipse from "./../../img/EllipseWhyWe.png";

export function WhyWe () {

    return (
        <div className="container-fluid p-0 whyWeFluid">
            <div className="container">
                <div className="row  ">
                    <div className="col-xl-12 whyWe">
                        <h6>Чому ми?</h6>
                        <ul className="benefits">
                            <li><img src={ellipse} alt="ellipse"/><h1>Перевага 1</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text</p></li>
                            <li><img src={ellipse} alt="ellipse"/><h1>Перевага 2</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text</p></li>
                            <li><img src={ellipse} alt="ellipse"/><h1>Перевага 3</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text</p></li>
                            <li><img src={ellipse} alt="ellipse"/><h1>Перевага 4</h1>
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