import React from "react";
import "./../../style/contact.css";


export function Map () {

    return (
        <div className="row ">
            <div className="col-xl-12 map">
                <h6>Контакти</h6>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10888.833651309846!2d31.966696592038534!3d46.97724095674197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1637686787031!5m2!1suk!2sua">
                     {/*width="100%" height="360" style="border:0;" allowFullScreen="" loading="lazy">*/}
                </iframe>
            </div>
        </div>
)

}
export default Map;