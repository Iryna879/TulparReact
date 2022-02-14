import React, {useEffect, useState} from "react";
import "./../../style/specialists.css";
import "./../../media/mediaSpecialists.css";
import {Link} from "react-router-dom";

export function  SpecialistsIndex ()  {
    const [specialists, setSpecialists] = useState([]);
    useEffect(() => {
        fetch("/api/specialists")
            .then(res => {
                // console.log(res);
                return res.json()
            })
            .then(res => {
                // console.log(res)
                setSpecialists(res)
            })
            .catch(err =>
                console.log(err))
    }, [])

    return (
        <div className="row  ">
            <div className="col-12 specialists">
                <h6>Наші спеціалісти</h6>
                <ul className="gridSpecialist">
                    {
                    specialists
                        .filter((item, index) => index < 8)
                        .map(s  =>
                            <li key={s._id}>
                                <img src={s.photo} alt="doctor"/>
                                <p>Доктор {s.surname} {s.name}</p>
                                <span>Лікар уважний, чуйний, а головне - професіонал своєї справи. 
                                      Швидко та якісно виконує свою роботу. </span>
                            </li>
                    )
                   }
                </ul>
               <Link to='/ourSpecialists'> <button>Детальніше</button></Link>
            </div>
        </div>
    )

}
