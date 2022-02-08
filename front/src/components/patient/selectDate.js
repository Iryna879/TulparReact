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
        <div className="bg-dark container-fluid calendarFluid">
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

                <div className="row d-flex justify-content-center ">
                            <div className="col-xl-1 offset-xl-5 col-lg-1 offset-lg-5
                            col-md-2 offset-md-4 col-sm-2 offset-sm-4 col-5 offset-1 ">
                                <Link to="/profile/searchdoctor">
                                    <Button color="danger">Назад</Button>
                                </Link>
                            </div>
                            <div className="col-xl-6 offset-xl-0 col-lg-5 offset-lg-1
                            col-md-5 offset-md-1 col-sm-5 offset-sm-1 col-2 offset-4">
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
