import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { Button } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import Calendar from "react-calendar";
import LeftSide from "./leftside";

const SelectDate = () => {
    const [date, setDate] = useState(new Date());
    const location = useLocation();
    const { doctor} = location.state;
    const onChange = (date) => {
        setDate(date);
    };
    let previous = new Date();
    previous.setDate(previous.getDate() - 1);
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
                        className="col-9 col-md-9 p-4"
                        style={{
                            border: "15px solid yellow ",
                            height: "80vh",
                            backgroundColor: "#6c757d",
                        }}
                    >
                        <div className="d-flex justify-content-center">
                            <div>
                                <Calendar
                                    tileDisabled={({ date }) =>
                                        date.getDay() === 0 || date < previous
                                    }
                                    onChange={onChange}
                                    value={date}
                                />
                                {console.log(date)}
                                <p className="text-center">
                                    {date.getFullYear().toString() +
                                    "-" +
                                    (date.getMonth() + 1).toString() +
                                    "-" +
                                    date.getDate().toString()}
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-5 ml-5">
                            <div className="col-2">
                                <Link to="/profile/searchdoctor">
                                    <Button color="danger">Назад</Button>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="/profile/book-slot"
                                        state={{
                                    date: date,
                                    doctor: doctor
                                }}
                                >
                                    <Button color="primary">Далі</Button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectDate;
