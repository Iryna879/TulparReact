const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Опишем нашу модель
const Appointments = new Schema({
    doctorId: String,
    patientEmail: String,
    dateId: String,
    slotId: String,
    date:  String,
    slotTime: String,
    doctorName: String,
    patientName:  String

});

// Экспортируем модель нашего студента
module.exports = mongoose.model("Appointments", Appointments);