import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { Button } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import Calendar from "react-calendar";
import ProfileMenu from "./profileMenu";
import "./style/selectDate.css";

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
        <>
            <ProfileMenu/>
        <div className="bg-dark container-fluid" style={{ height: "83.8vh" }}>
            <div>
                <div className="row m-5 pt-5 calendar" >
                        <h3 >Оберіть дату</h3>
                        <div className="col-12 d-flex justify-content-center  ">
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
                </div>

                <div className="row d-flex justify-content-center mt-5 ">
                            <div className="col-1 offset-5">
                                <Link to="/profile/searchdoctor">
                                    <Button color="danger">Назад</Button>
                                </Link>
                            </div>
                            <div className="col-6">
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
        </>
    );
};

export default SelectDate;
