import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Leftside from "./leftside";


const BookingSlots = (props) => {
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

        //fetchDate(dateToSend);


  return (
      allData.map(data => {
              console.log(data);
              console.log(dateToSend);
              const result = data.dates.filter(date => date.date === dateToSend);
              console.log("res" + result);
              //setSlots(result.slots);
          return (
          result.map (r =>

      <div className="bg-dark" style={{ height: "100vh" }}>
          <div>
              <div className="row m-5" style={{ maxWidth: "100%" }}>
                  <div className="col-3 col-md-3 p-4 bg-white ">
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
                      <table className="table table-hover table-dark">
                          <thead>
                          <tr>
                              <th scope="col">Slot</th>
                              <th scope="col">Booking Status</th>
                          </tr>
                          </thead>
                          <tbody>
                          {r.slots.map(slot =>
                              <tr key={slot._id}>
                                  <th scope="row">{slot.time}</th>
                                  {slot.isBooked ? (
                                      <td>Booked</td>
                                  ) : (
                                      <td>
                                          <Link
                                              to="/profile/confirmation"
                                                  state={{
                                                      dateId: r._id,
                                                      doctor: doctor,
                                                      slotId: slot._id,
                                                  }}
                                          >
                                              Book Now
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
      </div> ))
          }
      )
  );
   /*for(let data of allData) {
       for(let d of data.dates){
           if(d.date === dateToSend){
               setdateId(d._id);
               setSlots(d.slots);
           }
       }
   }
*/

};

export default BookingSlots;
