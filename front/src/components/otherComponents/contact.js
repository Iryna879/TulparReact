import React, {useEffect, useState} from "react";
import "./../../style/contact.css";
import "./../../media/mediaContact.css";

export function Contact () {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        fetch("/api/contacts")
            .then(res =>res.json())
            .then(result => {
                //console.log(result);
                setContacts(result);
            },
                (err) => {
                    console.log(err)
                }
                )
            /*.catch(err =>
                console.log(err))*/
    }, [] )
    /*contacts.map(c => console.log("con" + c.info));*/
//console.log("cont" + contacts[0].heading);
    return (
    <div className="row ">
        <div className="col-12 d-flex  contacts">
          {/*   <div className="address">
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
            </div>*/}
        </div>
    </div>
    )

}
export default Contact;