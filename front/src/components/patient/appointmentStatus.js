import React, { useState, useEffect } from "react";
import {useAuth0, withAuthenticationRequired} from "@auth0/auth0-react";
import ProfileMenu from "./profileMenu";
import {Link} from "react-router-dom";
import { Circles } from 'react-loader-spinner';
import "./style/bookingSlots.css";

const AppointmentStatus = withAuthenticationRequired(
    () => {
    const [appointments, setAppointments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {user} = useAuth0();
    const { email} = user;



    useEffect(() => {
        fetch("/api/appointments/upcoming-appointments/" + email)
            .then(res => {
                // console.log(res);
                return res.json()
            })
            .then(res => {
                // console.log(res)
                setAppointments(res)
            })
            .catch(err =>
                console.log(err))

        setIsLoading(false)
    }, [email])

    const deleteSlot = (id) => {
        appointments
            .filter(aId => aId._id === id)
            .map(a =>
        fetch("/api/appointments",
            {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    _id: a._id,
                    doctorId: a.doctorId,
                    slotId: a.slotId,
                    dateId: a.dateId,
                    })
            }
            )
            .then(() => console.log())
            .catch(err =>
                console.log(err))
            )
}

    return (
        <>
            <ProfileMenu />
        <div className="bg-dark container-fluid" style={{ height: "83.8vh" }}>
                <div className="row mt-5" >
                    {isLoading && <h1><Circles/></h1>}
                    {!isLoading && <div className="col-12 p-xl-4 p-lg-4 p-md-4 p-sm-3 p-2 pt-4">
                        <table className="table table-hover table-light">
                            <thead>
                            <tr>
                                <th scope="col">????????</th>
                                <th scope="col">??????</th>
                                <th scope="col">??????????</th>
                                <th scope="col">??????????????????</th>
                            </tr>
                            </thead>
                            <tbody>
                            {appointments.map((Appointment) => (
                                <tr key={Appointment._id}>
                                    <th scope="row">{Appointment.date}</th>
                                    <th scope="row">{Appointment.slotTime}</th>
                                    <th scope="row">{Appointment.doctorName}</th>
                                    <th scope="row"> <Link to='/profile/searchdoctor' >
                                        <button className="btn btn-danger btn-block"
                                                onClick={() => deleteSlot(Appointment._id)}
                                        >
                                            ??????????????????
                                        </button> </Link> </th>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div> }
                </div>
            </div>
        </>
    );
},
    {
        returnTo: '/profile/appointment-status',
        onRedirecting: () => <Circles/>
    }
)

export default AppointmentStatus;