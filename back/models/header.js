// Подключим настройку модели (Схемы) DB
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Опишем нашу модель
const Header = new Schema({
    name: String,
    heading: String, // Фрагмент строки для поисковой системы
    paragraph: String
});

// Экспортируем модель нашего студента
module.exports = mongoose.model("Header", Header);