// TODO: подключить модель для сущности
const doctors = require("../models/specialists");
const { specialists, slot, dateSchedule } = doctors;
const appointment = require("../models/appointments");


// Create => POST
exports.post = function (request, response) {
    console.log("Run POST");
    const element = new specialists(request.body);
    element.save(function (err) {
        if (err) {
            console.log(err);
            response.json(err);
            return;
        }
        return response.json(element);
    });
}

// Read => GET
exports.get = function (request, response) {
    console.log("Run GET");
    specialists.find({},
        function (err, allData ) {
            if (err){
                console.log(err);
                response.json(err);
                return;
            }
            response.json(allData);
        }
    );
}

// To get the slots available for the date
exports.getSlots = function (request, response)  {
      const {id} = request.params;
      specialists.find({_id: id},
          function(err, allData) {
          if(err){
              console.log(err);
              return err;
          }
           console.log(allData);
          if(allData.length > 0) {
              //console.log("Doctor  found in the database!");
                          return response.json(allData);

          } else {
              console.log("Doctor not found in the database!");
              return response.status(201).json({
                  message: "Doctor not found in the database!",
              });
          }
      });
}

exports.bookSlot = function(request, response) {
    const patientEmail = request.body.patientEmail; // Patient's email
    const patientName = request.body.patientName; // Patient's name
    const doctorId = request.body.doctorId; // Doctor's id 606460d2e0dd28cc76d9b0f3
    const slotId = request.body.slotId; // Id of that particular slot
    const dateId = request.body.dateId; // Id of that particular date
    console.log(patientEmail + patientName + dateId);
   // const meetLink = "";

    specialists.find({ _id: doctorId },
        function(err, allData) {
            if(err){
                console.log(err);
                return err;
            }

            console.log(allData);
            if(allData.length > 0) {
                allData.map(doctor => {
                    const date = doctor.dates.id(dateId);
                    const slot = date.slots.id(slotId);
                    slot.isBooked = true;
                    doctor
                        .save()
                        .then(() => {
                            // Create an entry in the appointment database
                            const newAppointment = new appointment({
                                doctorId,
                                patientEmail,
                                dateId,
                                slotId,
                                date: date.date,
                                slotTime: slot.time,
                                doctorName: doctor.name + " " + doctor.surname,
                                patientName: patientName
                            });

                            console.log(newAppointment);

                            newAppointment
                                .save()
                                .then((appointment) => {
                                    return response.status(200).json(appointment);
                                })
                                .catch((err) => {
                                    console.log(err);
                                    response.status(400).json(err);
                                });
                        })
                        .catch((err) => {
                            console.log(err);
                            response.status(400).json({
                                message: `An error occurred : ${err}`,
                            });
                        });
                } )

            } else {
                console.log("Doctor not found in the database!");
                return response.status(404).json({
                    message: "Doctor not found in the database!",
                });
            }
    })
}





