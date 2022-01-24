import React, {useEffect, useState} from "react";
import "./../../style/specialistsInfo.css";
import {InfoSpecialists} from "./infoSpecialists";
import "./../../media/mediaSpecialistsInfo.css";


export function  OurSpecialistsPageSpecList ()  {
    const [specialists, setSpecialists] = useState([]);
    const [selectedEmp, setSelectedEmp] = useState("61cde943fec7185d7b2ce8cf");
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
        <div className="container">
            <div className="row  ">
                <div className="col-12 ">
                    <ul className="specialistsListPage">
                        {
                            specialists
                                .filter ((item, index) => index < 6)
                                .map(s  =>
                                        <li key={s._id} onClick={() => setSelectedEmp(s._id)}>
                                            <img src={"http://localhost:5000" + s.photo} alt="doctor"/>
                                            <p>{s.surname} {s.name}</p>
                                        </li>
                            )
                        }
                    </ul>
                    <InfoSpecialists specialist={specialists} selected={selectedEmp}/>
                </div>
            </div>
        </div>
    )

}
