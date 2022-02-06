import React, { useState, useEffect } from "react";
import "./dashboard.css";
import {useAuth0} from "@auth0/auth0-react";
import Leftside from "./leftside";

const AppointmentStatus = () => {
    const [appointments, setAppointments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {user} = useAuth0();
    const { email} = user;

    useEffect(() => {
        setIsLoading(true)

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
    }, [])

    return (
        <div className="bg-dark" style={{ height: "100vh" }}>
            <div>
                <div className="row m-5" style={{ maxWidth: "100%" }}>
                    <div
                        className="col-3 col-md-3 p-4 bg-white "
                        style={{ height: "80vh" }}
                    >
                        <Leftside />
                    </div>
                    {isLoading && <h1>Loading</h1>}
                    {!isLoading && <div
                        className="col-9 col-md-9 p-4"
                        style={{
                            border: "15px solid yellow ",
                            height: "80vh",
                            backgroundColor: "#6c757d",
                        }}
                    >
                        <table className="table table-hover table-dark">
                            <thead>
                            <tr>
                                <th scope="col">Дата</th>
                                <th scope="col">Час</th>
                                <th scope="col">Лікар</th>
                            </tr>
                            </thead>
                            <tbody>
                            {appointments.map((Appointment) => (
                                <tr key={Appointment._id}>
                                    <th scope="row">{Appointment.date}</th>
                                    <th scope="row">{Appointment.slotTime}</th>
                                    <th scope="row">{Appointment.doctorName}</th>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div> }
                </div>
            </div>
        </div>
    );
};

export default AppointmentStatus;