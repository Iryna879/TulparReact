const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Опишем нашу модель
const Contacts = new Schema({
    heading: String,
    info: String
});

// Экспортируем модель нашего студента
module.exports = mongoose.model("Contacts", Contacts);