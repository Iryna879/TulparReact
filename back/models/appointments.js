const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Опишем нашу модель
const Appointments = new Schema({
    doctorId: String,
    dateId: String,
    slotId: String,
    patientId: String,
    date:  String,
    slotTime: String,
    doctorName: String,
    patientName:  String,
    patientEmail: String
});

// Экспортируем модель нашего студента
module.exports = mongoose.model("Appointments", Appointments);