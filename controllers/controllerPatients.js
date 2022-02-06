// TODO: подключить модель для сущности
const router = require('express').Router();
const patient = require("../models/patients");
const appointment = require ("../models/appointments");
// Create => POST
exports.post = function (request, response) {
    console.log("Run POST");
    //const element = new patient(request.body);
    const name = request.body.name;
    const picture = request.body.picture;
    const email = request.body.email;

    const newPatient = new patient({
         name, picture, email
    })
    newPatient.save(function (err) {
        if (err) {
            console.log(err);
            response.json(err);
            return;
        }
        return response.json(newPatient);
    });
}

// Read => GET
exports.get = function (request, response) {
    console.log("Run GET");
    patient.find({},
        function (err, allData) {
            if (err) {
                console.log(err);
                response.json(err);
                return;
            }
            response.json(allData);
        }
    );
}

    // Проверить наличие почты в базе
    exports.testByEmail = function (request, response) {
        const {email} = request.params;
        patient.find({email: email},
            function (err, allData ) {
                if (err){
                    console.log(err);
                    return err;
                }
                console.log("testByEmail:");
                console.log(allData);
                if (allData.length > 0)
                {
                    console.log("True");
                    response.send(true);
                } else
                {
                    console.log("False");
                    response.send(false);
                }
            }
        );
    }


    /* router.route('/previous-appointments').post( function (request, response) {
         console.log("Run POST");
         try {
             const id = request.body.id;
             const appointments = appointment.find({patientId: id});

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

             const filteredAppointments = appointments.filter((app) => {
                 return Date.parse(currDateTime) >= Date.parse(app.date + 'T' + app.slotTime)
             })

             const sortedAppointments = filteredAppointments.sort((a, b) => {
                 return Date.parse(b.date + 'T' + b.slotTime) - Date.parse(a.date + 'T' + a.slotTime)
             })
             response.status(200).json(sortedAppointments);
         }
         catch (err) {
         console.log(err)
             response.status(400).json(err)}
     })

     router.route('/upcoming-appointments').post(function (request, response) {
         console.log("Run POST");
         try {
             const id = request.body.id;
             const appointments = appointment.find({patientId: id});

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

             const filteredAppointments = appointments.filter((appointment) => {
                 return Date.parse(currDateTime) <= Date.parse(appointment.date + 'T' + appointment.slotTime)
             })

             const sortedAppointments = filteredAppointments.sort((a, b) => {
                 return Date.parse(a.date + 'T' + a.slotTime) - Date.parse(b.date + 'T' + b.slotTime)
             })

             response.status(200).json(sortedAppointments);
         } catch (err) {
             console.log(err)
             response.status(400).json(err)
         }
     })*/



