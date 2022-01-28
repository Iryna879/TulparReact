const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Опишем нашу модель
const Specialists = new Schema({
    surname: String,
    name: String,
    patronymic: String,
    jobTitle: String,
    specialization: String,
    photo: String,
    career: String,
    activity: String
});

// Экспортируем модель нашего студента
module.exports = mongoose.model("Specialists", Specialists);