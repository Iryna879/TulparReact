import React, {useEffect, useState} from "react";
import "./../../style/specialists.css";


export function  SpecialistsIndex ()  {
    const [specialists, setSpecialists] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/api/specialists")
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
            <div className="col-xl-12 specialists">
                <h6>Наші спеціалісти</h6>
                <ul className="gridSpecialist">
                    {
                    specialists.map((s, index) => {
                        while (index < 8) {
                            return(
                            <li key={s._id}>
                                <img src={"http://localhost:3001" + s.photo} alt="doctor"/>
                                <p>Доктор {s.surname} {s.name}</p>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text</span>
                            </li>
                            )
                        }
                    })
                   }
                </ul>
                <button onClick={(e) => window.location.assign('http://localhost:3000/ourSpecialists') }>Детальніше</button>
            </div>
        </div>
    )

}
