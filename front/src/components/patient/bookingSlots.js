import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "./profileMenu";
import "./style/bookingSlots.css";

const BookingSlots = () => {
    const location = useLocation();
    const { date, doctor } = location.state;
    // console.log("Date: " + date + " DoctorId: " + doctorId);
    const [allData, setAllData] = useState([]);

    useEffect(() => {
                  fetch("/api/specialists/getSlots/" + doctor._id)
                      .then(res => {
                          // console.log(res);
                          return res.json()
                      })
                      .then(res => {
                          // console.log(res)
                          setAllData(res)
                      })
                      .catch(err =>
                          console.log(err))
    }, [doctor._id])

        function getDateString() {
            let finalDate = date.getFullYear().toString()
            const month = date.getMonth() + 1
            const day = date.getDate();

            if(month < 10) {
                finalDate += ('-0' + month.toString())
            }
            else {
                finalDate += '-' + month.toString()
            }

            if(day < 10) {
                finalDate += ('-0' + day.toString())
            }
            else {
                finalDate += '-' + day.toString()
            }

            return finalDate

        }
        const dateToSend = getDateString();



  return (
      allData.map(data => {
              //console.log(data);
              //console.log(dateToSend);
              const result = data.dates.filter(date => date.date === dateToSend);
              //console.log("res" + result);
              //setSlots(result.slots);
          return (
          result.map (r => <>
              <ProfileMenu />
      <div className="bg-dark" style={{ height: "83.8vh" }}>
          <div>
              <div className="row m-5" >
                  <div className="col-12 p-xl-4 p-lg-4 p-md-4 p-sm-3 p-2 pt-4">
                      <table className="table table-hover table-light">
                          <thead>
                          <tr>
                              <th scope="col">Час</th>
                              <th scope="col">Статус</th>
                          </tr>
                          </thead>
                          <tbody>
                          {r.slots.map(slot =>
                              <tr key={slot._id}>
                                  <th scope="row">{slot.time}</th>
                                  {slot.isBooked ? (
                                      <td>Зайнято</td>
                                  ) : (
                                      <td>
                                          <Link
                                              to="/profile/confirmation"
                                                  state={{
                                                      dateId: r._id,
                                                      doctor: doctor,
                                                      slot: slot,
                                                  }}
                                          >
                                              Вільно
                                          </Link>
                                      </td>
                                  )}
                              </tr>
                          )}
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
          </>))
          }
      )
  );

};

export default BookingSlots;
