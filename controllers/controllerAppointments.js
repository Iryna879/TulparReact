// TODO: подключить модель для сущности
const appointment = require("../models/appointments");

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
