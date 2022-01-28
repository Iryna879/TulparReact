const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Services = new Schema({
    title: String,
    price: Number,
    department: String
});


module.exports = mongoose.model("Services", Services);