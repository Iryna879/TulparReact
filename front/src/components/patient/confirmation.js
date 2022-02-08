import React from "react";
import { Link, useLocation } from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import ProfileMenu from "./profileMenu";
import "./style/confirmation.css";

const Confirmation = () => {

    const location = useLocation();
    const { dateId, doctor, slot } = location.state;
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
                        slotId: slot._id,
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
        <>
            <ProfileMenu />
        <div className="bg-dark confirmation" >
                <div className="row m-5 mb-0 d-flex justify-content-center " >
                    <div className="col-xl-6 col-lg-6
                    col-md-8 col-sm-8 col-10
                     p-4 receipt">
                        <div className="container text-white">
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6 cAddress">
                                            <address>
                                                <strong>Тулпар</strong>
                                                <br />
                                                Садова, 7
                                                <br />
                                                Миколаїв, 54001
                                                <br />
                                                <abbr title="Phone">P:</abbr> (512) 48-44-68
                                            </address>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 text-right time">
                                            <p>
                                                <em>Час: {slot.time} </em>
                                            </p>
                                        </div>
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
                                        <div className="buttons">
                                        <Link to='/profile/appointment-status' >
                                            <button
                                                type="button"
                                                className="btn btn-success btn-lg btn-block"
                                            onClick={() => bookSlot()} >
                                                Підтверджую
                                            </button>
                                        </Link>
                                        <Link to='/profile' >
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-lg btn-block ">
                                            Назад
                                        </button>
                                        </Link>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                </div>
        </>
    )
}

export default Confirmation;
