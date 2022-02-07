// TODO: подключить модель для сущности
const appointment = require("../models/appointments");
const doctors = require("../models/specialists");
const { specialists, slot, dateSchedule } = doctors;

// Create => POST
exports.post = function (request, response) {
    console.log("Run POST");
    const element = new appointment(request.body);
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
    appointment.find({},
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

exports.upcomingAppointments = function (request, response) {

        const {patientEmail} = request.params;
        appointment.find({ patientEmail: patientEmail },
            function (err, allData ) {
                if (err){
                    console.log(err);
                    response.json(err);
                    return;
                }

                // Get current dateTime
                const date = new Date()
                let currDateTime = date.getFullYear().toString()
                const month = date.getMonth() + 1
                const day = date.getDate()
                const hour = date.getHours()
                const minutes = date.getMinutes()
                const seconds = date.getSeconds()

                currDateTime += month < 10 ? ('-0' + month.toString()) : '-' + month.toString()
                currDateTime += day < 10 ? ('-0' + day.toString()) : '-' + day.toString()
                currDateTime += hour < 10 ? ('T0' + hour.toString()) : 'T' + hour.toString()
                currDateTime += minutes < 10 ? (':0' + minutes.toString()) : ':' + minutes.toString()
                currDateTime += seconds < 10 ? (':0' + seconds.toString()) : ':' + seconds.toString()

                const filteredAppointments = allData.filter((a) => {
                    return Date.parse(currDateTime) <= Date.parse(a.date + 'T' + a.slotTime)
                })

                const sortedAppointments = filteredAppointments.sort((a, b) => {
                    return Date.parse(a.date + 'T' + a.slotTime) - Date.parse(b.date + 'T' + b.slotTime)
                })

                response.status(200).json(sortedAppointments);
            }
            );

}

exports.delete = function (request, response) {
    console.log("Run DELETE ");
   // console.log(request);
    const doctorId =  request.body.doctorId;
    console.log(doctorId);
    const appId = request.body._id;
    const slotId = request.body.slotId;
    const dateId = request.body.dateId;
    specialists.find({ _id: doctorId },
        function(err, allData) {
            if (err) {
                console.log(err);
                return err;
            }

            console.log(allData);
            if (allData.length > 0) {
                allData.map(doctor => {
                        const date = doctor.dates.id(dateId);
                        const slot = date.slots.id(slotId);
                        slot.isBooked = false;
                    doctor
                        .save()
                        .then(() => {
                            appointment.findByIdAndDelete( appId,
                                {},
                                function (err) {
                                    if (err) response.send(err);
                                    response.sendStatus(200);
                                }
                            ); })
                        .catch((err) => {
                                console.log(err);
                                response.status(400).json({
                                    message: `An error occurred : ${err}`,
                                });
                            });


                    }
                )
            }

            } )

}
