const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Опишем нашу модель
const Patients = new Schema({
    email:  String,
    name: String,
    picture: String,
});

// Экспортируем модель
module.exports = mongoose.model("Patients", Patients);