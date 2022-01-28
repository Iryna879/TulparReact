const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Опишем нашу модель
const WhatIsBlocks = new Schema({
    name: String,
    header: String,
    paragraphOne: String,
    paragraphTwo: String,
    background: String
});

// Экспортируем модель нашего студента
module.exports = mongoose.model("WhatIsBlocks", WhatIsBlocks);