import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { Button } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import Calendar from "react-calendar";
import Leftside from "./leftside";

const SelectDate = (props) => {
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
                        <Leftside />
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
                            {/* <ReactCalendar /> */}
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
                        {/* <Row className="w-100">
            <Col> */}
                        <div className="row justify-content-center mt-5 ml-5">
                            <div className="col-2">
                                <Link to="/profile/searchdoctor">
                                    <Button color="danger">GO BACK</Button>
                                </Link>
                            </div>
                            {/* </Col>
            <Col> */}
                            <div className="col-4">
                                <Link to="/profile/book-slot"
                                        state={{
                                    date: date,
                                    doctor: doctor
                                }}
                                >
                                    <Button color="primary">Confirm And Go to Next Step</Button>
                                </Link>
                            </div>
                            {/* </Col>
          </Row> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectDate;
