import React from "react";
import { Link, useLocation } from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import LeftSide from "./leftside";

const Confirmation = () => {

    const location = useLocation();
    const { dateId, doctor, slotId } = location.state;
    // console.log("date: " + dateId + " " + "slot: " + slotId + "doctor: " + doctor._id);
    const {user} = useAuth0();
    const {name, email} = user;
    // console.log("name: " + name + " " + "email: " + email);

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

    return (
        <div className="bg-dark" style={{ height: "100vh" }}>
            <div>
                <div className="row m-5" style={{ maxWidth: "100%" }}>
                    <div
                        className="col-3 col-md-3 p-4 bg-white "
                        style={{ height: "80vh" }}
                    >
                        <LeftSide />
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
                                                <strong>Тулпар</strong>
                                                <br />
                                                Садова, 7
                                                <br />
                                                Миколаїв, 54001
                                                <br />
                                                <abbr title="Phone">P:</abbr> (213) 484-6829
                                            </address>
                                        </div>
                                       {/* <div className="col-xs-6 col-sm-6 col-md-6 text-right">
                                            <p>
                                                <em>Date: 1st November, 2013</em>
                                            </p>
                                            <p>
                                                <em>Receipt #: 34522677W</em>
                                            </p>
                                        </div>*/}
                                    </div>
                                    <div className="row">
                                        <div className="text-center">
                                            <h1>Запис</h1>
                                        </div>
                                        <table className="table table-hover text-white">
                                            <thead>
                                            <tr>
                                                <th>Лікар</th>
                                                <th>Спеціалізація</th>
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
                                        <Link to='/profile/appointment-status' >
                                            <button
                                                type="button"
                                                className="btn btn-success btn-lg btn-block"
                                            onClick={() => bookSlot()} >
                                                Підтверджую
                                                <span className="glyphicon glyphicon-chevron-right" />
                                            </button>
                                        </Link>
                                        <Link to='/profile' >
                                        <button
                                            type="button"
                                            className="btn btn-success btn-lg btn-block">
                                            Назад
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
