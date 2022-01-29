import React, {useEffect, useState} from 'react';
import ProfilePage from "./profilePage";


const Patient = () => {
    const [patient, setPatient] = useState([]);
    useEffect(() => {
        fetch("/api/patients")
            .then(res => {
                // console.log(res);
                return res.json()
            })
            .then(res => {
                // console.log(res)
                setPatient(res)
            })
            .catch(err =>
                console.log(err));
    })

return (
    <ProfilePage patient={patient} />
)
}

export default Patient;