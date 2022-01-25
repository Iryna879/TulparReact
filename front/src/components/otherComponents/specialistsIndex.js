import React, {useEffect, useState} from "react";
import "./../../style/specialists.css";
import "./../../media/mediaSpecialists.css";

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
                                <img src={"http://localhost:5000" + s.photo} alt="doctor"/>
                                <p>Доктор {s.surname} {s.name}</p>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text</span>
                            </li>
                    )
                   }
                </ul>
                <button onClick={() => window.location.assign('/ourSpecialists') }>Детальніше</button>
            </div>
        </div>
    )

}
