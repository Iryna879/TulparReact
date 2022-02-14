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
                            <li><img src={mind} alt="mind"/><h1>Продумані схеми реабілітації</h1>
                                <p>Список необхідних реабілітаційних заходів підбирається індивідуально для кожного 
                                   пацієнта, виходячи з його діагнозу та фізичних можливостей.</p></li>
                            <li><img src={bed} alt="bed"/><h1>Умови перебування у центрі</h1>
                                <p> У нашому центрі людина може повною мірою зосередитись на своєму відновленні. 
                                   Тут для кожного пацієнта забезпечується максимальний рівень побутового комфорту.</p></li>
                            <li><img src={smile} alt="smile"/><h1>Комплексний підхід до реабілітації</h1>
                                <p>У реабілітаційному центрі «Тулпар» використовуються різноманітні реабілітаційні 
                                   заходи, що забезпечують пацієнту всебічне відновлення.</p></li>
                            <li><img src={like} alt="like"/><h1>Високотехнологічне обладнання</h1>
                                <p>Центр добре оснащений, що дозволяє застосовувати найефективніші та 
                                   високотехнологічні процедури для відновлення пацієнтів.</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default WhyWe;