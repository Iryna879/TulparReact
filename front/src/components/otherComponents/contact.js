import React, {useEffect, useState} from "react";
import "./../../style/contact.css";
import "./../../media/mediaContact.css";

export function Contact () {
    const [contacts, setContacts] = useState(null);
    useEffect(() => {
        fetch("/api/contacts")
            .then(res => {return res.json() })
            .then(result => {
               // console.log(result);
                setContacts(result);
            })
            .catch(err =>
                console.log(err))
    } )

    if (contacts === null) {
        return (<div>Loading ...</div>)
    }
    return (
    <div className="row ">
        <div className="col-12 d-flex  contacts">
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