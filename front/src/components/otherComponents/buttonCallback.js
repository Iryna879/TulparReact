import React, {useState} from "react";
import  "./../../style/button.css";
import "./../../media/mediaButton.css";
import TelegramBot from "../TelegramBot/TelegramBot";
export function ButtonCallback () {

    const [click, setClick] = useState(false);

    return (
        <div>
        <div type="button" className="callback-bt">
            <div className="text-call" onClick={() => click ? setClick(false) : setClick(true)}>
                <i className="fa fa-phone"/>
                <span>Замовити<br/>дзвінок</span>
            </div>
        </div>
    <div>
        {
            click ?  <TelegramBot /> : ""
        }
    </div>
        </div>
    )

}
export default ButtonCallback;