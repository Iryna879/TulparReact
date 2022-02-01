import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import {useAuth0} from "@auth0/auth0-react";
import Leftside from "./leftside";

function getEndDateTime(dateTime) {
    const hrs = (parseInt(dateTime.split("T")[1].split(":")[0]) + 1)
        .toString()
        .padStart(2, "0");
    const time = hrs + ":00:00";
    const date = dateTime.split("T")[0];
    return date + "T" + time;
}

const Confirmation = () => {
    //const [finalBalnce, setFinalBalnce] = useState(0);
    //const [data, setData] = useState([]);


    /*function createEvent(id, dateTime, doctorEmail) {
        var virtualEvent = {
            id: id,
            summary: "Appointment",
            location: "Virtual",
            description: "Doctor-Patient appointment",
            start: {
                dateTime: dateTime,
                timeZone: "Asia/Kolkata",
            },
            end: {
                dateTime: getEndDateTime(dateTime),
                timeZone: "Asia/Kolkata",
            },
            conferenceData: {
                createRequest: {
                    requestId: "7qxalsvy0e",
                },
            },
            attendees: [{ email: doctorEmail }],
            guestsCanModify: true,
            reminders: {
                useDefault: false,
                overrides: [
                    { method: "email", minutes: 24 * 60 },
                    { method: "popup", minutes: 15 },
                ],
            },
        };

        var request = window.gapi.client.calendar.events.insert({
            calendarId: "primary",
            resource: virtualEvent,
            sendUpdates: "all",
            supportsAttachments: true,
            conferenceDataVersion: 1,
        });

        request.execute(function (event) {
            console.log("Executed!");

            // Add meet link
            if (event) {
                // console.log(`AddEvent link : ${event.hangoutLink}, Id : ${id}`)
                axios.put(
                    `${process.env.REACT_APP_SERVER_URL}/appointments/add-meet-link`,
                    {
                        appointmentId: id,
                        meetLink: event.hangoutLink
                    }
                ).then((x) => {
                    console.log(`Updated Meet Link!`);
                })
            }
        });
    }*/

    const location = useLocation();
    const { dateId, doctor, slotId } = location.state;
    console.log("date: " + dateId + " " + "slot: " + slotId + "doctor: " + doctor._id);
    const {user} = useAuth0();
    const {name, email} = user;
    console.log("name: " + name + " " + "email: " + email);
    const navigate = useNavigate();
    let { data } = [];
    const bookSlot = () => {
            fetch("/api/specialists/book-slot/",
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        patientEmail: email,
                        patientName: name,
                        slotId: slotId,
                        dateId: dateId,
                        doctorId: doctor._id
                    })
                }
            )
                .then(res => {
                    console.log("Result:", res);
                    return res.json();
                })
                .then(d => {
                    console.log(d);
                })
                .catch(err => {
                    console.log(err);
                });
        }

    /*if (data.doctorEmail) {
        createEvent(data._id, data.date + "T" + data.slotTime, data.doctorEmail);
    }*/
   // };

    /*useEffect(() => {
        setFinalBalnce(1.18 * doctor.feesPerSession);
    }, []);*/

   /* const makePayment = async (token) => {
        const { data } = await Axios.post(
            `${process.env.REACT_APP_SERVER_URL}/patients/payment`,
            {
                token,
                finalBalnce,
            }
        );*/

       /* if (data) {
            bookSlot();
            toast("Appointment booked successfully", {
                type: "success"
            })
            navigate("/profile");
        }

        console.log(data);*/
    //};
    //bookSlot();
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
                    <div
                        className="col-9 col-md-9 p-4 "
                        style={{
                            border: "15px solid yellow ",
                            height: "80vh",
                            backgroundColor: "#6c757d",
                        }}
                    >
                        <div className="container text-white">
                            <div className="row">
                                <div className="well col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3">
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <address>
                                                <strong>Elf Cafe</strong>
                                                <br />
                                                2135 Sunset Blvd
                                                <br />
                                                Los Angeles, CA 90026
                                                <br />
                                                <abbr title="Phone">P:</abbr> (213) 484-6829
                                            </address>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 text-right">
                                            <p>
                                                <em>Date: 1st November, 2013</em>
                                            </p>
                                            <p>
                                                <em>Receipt #: 34522677W</em>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="text-center">
                                            <h1>Receipt</h1>
                                        </div>
                                        <table className="table table-hover text-white">
                                            <thead>
                                            <tr>
                                                <th>Doctor Name</th>
                                                <th>Specialization</th>

                                                <th className="text-center">Total</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td className="col-md-9">
                                                    <em>{doctor.name + " "  + doctor.surname}</em>
                                                </td>
                                                <td
                                                    className="col-md-1"
                                                    style={{ textAlign: "center" }}
                                                >
                                                    {doctor.specialization}
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <Link to='/profile' >
                                            <button
                                                type="button"
                                                className="btn btn-success btn-lg btn-block"
                                            onClick={() => bookSlot()} >
                                                Confirm
                                                <span className="glyphicon glyphicon-chevron-right" />
                                            </button>
                                        </Link>
                                        <Link to='/profile' >
                                        <button
                                            type="button"
                                            className="btn btn-success btn-lg btn-block">
                                            Back
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirmation;
