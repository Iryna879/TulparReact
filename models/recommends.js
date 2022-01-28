const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Опишем нашу модель
const Recommends = new Schema({
    name: String,
    img: String
});

// Экспортируем модель нашего студента
module.exports = mongoose.model("Recommends", Recommends);