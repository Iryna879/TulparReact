import React, {useEffect, useState} from "react";
import "./../../style/contact.css";


export function Contact () {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/api/contacts")
            .then(res => {
                // console.log(res);
                return res.json()
            })
            .then(res => {
                //console.log(res);
                setContacts(res)
            })
            .catch(err =>
                console.log(err))
    })
    return (
    <div className="row ">
        <div className="col-xl-12 d-flex  contacts">
           <div className="address">
                <h3>{contacts[0].heading}</h3>
                <p>{contacts[0].info}</p>
            </div>
            <div className="phone">
                <h3>{contacts[1].heading}</h3>
                <p>{contacts[1].info}</p>
            </div>
            <div className="email">
                <h3>{contacts[2].heading}</h3>
                <p>{contacts[2].info}</p>
            </div>
        </div>
    </div>
    )

}
export default Contact;