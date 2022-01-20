import React, {useEffect, useState} from "react";
import "./../../style/specialistsInfo.css";
import {InfoSpecialists} from "./infoSpecialists";
import "./../../media/mediaSpecialistsInfo.css";


export function  OurSpecialistsPageSpecList ()  {
    const [specialists, setSpecialists] = useState([]);
    const [selectedEmp, setSelectedEmp] = useState("61cde943fec7185d7b2ce8cf");
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
        <div className="container">
            <div className="row  ">
                <div className="col-12 ">
                    <ul className="specialistsListPage">
                        {
                            specialists.map((s, index) => {
                                while (index < 6) {
                                    return(
                                        <li key={s._id} onClick={() => setSelectedEmp(s._id)}>
                                            <img src={"http://localhost:3001" + s.photo} alt="doctor"/>
                                            <p>{s.surname} {s.name}</p>
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>
                    <InfoSpecialists specialist={specialists} selected={selectedEmp}/>
                </div>
            </div>
        </div>
    )

}
