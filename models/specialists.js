const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SlotSchema = new Schema({
    time:  String,
    isBooked:  Boolean,
})

const DateSchedule = new Schema({
    date:  String,
    slots : [SlotSchema]
})

// Опишем нашу модель
const Specialists = new Schema({
    surname: String,
    name: String,
    patronymic: String,
    jobTitle: String,
    specialization: String,
    photo: String,
    career: String,
    activity: String,
    dates : [DateSchedule]
});

// Экспортируем модель
const slot = mongoose.model('Slot', SlotSchema);
const dateSchedule = mongoose.model('DateSchedule', DateSchedule);
const specialists = mongoose.model("Specialists", Specialists);
module.exports = {
    specialists,
    slot,
    dateSchedule
};