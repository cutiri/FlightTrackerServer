const mongoose = require("mongoose");
const axios = require("axios");

const flightSchema = mongoose.Schema({
    hex: { type: String, require: true },
    reg_number: { type: String },
    aircraft_icao: { type: String },
    flag: { type: String },
    lat: { type: String },
    lng: { type: String },
    alt: { type: String },
    dir: { type: String },
    speed: { type: String },
    v_speed: { type: String },
    squawk: { type: String },
    airline_iata: { type: String },
    airline_icao: { type: String },
    flight_iata: { type: String },
    flight_icao: { type: String },
    flight_number: { type: String },
    dep_iata: { type: String },
    dep_icao: { type: String },
    dep_terminal: { type: String },
    dep_gate: { type: String },
    dep_time: { type: String },
    dep_time_ts: { type: String },
    dep_time_utc: { type: String },
    dep_estimated: { type: String },
    dep_estimated_ts: { type: String },
    dep_estimated_utc: { type: String },
    arr_iata: { type: String },
    arr_icao: { type: String },
    arr_terminal: { type: String },
    arr_gate: { type: String },
    arr_baggage: { type: String },
    arr_time: { type: String },
    arr_time_ts: { type: String },
    arr_time_utc: { type: String },
    arr_estimated: { type: String },
    arr_estimated_ts: { type: String },
    arr_estimated_utc: { type: String },
    duration: { type: String }, // 	Estimated flight time (in minutes).
    dep_delayed: { type: String }, //Estimated time of flight departure delay (in minutes).
    arr_delayed: { type: String }, //Estimated time of flight arrival delay (in minutes).
    updated: { type: String }, //UNIX timestamp of last aircraft signal.
    status: { type: String },
    model: { type: String },
    manufacturer: { type: String },
    type: { type: String },
    duration: { type: String },
    //Our stuff
    positionHistory: [
        { lat: String, lng: String, alt: String, dir: String, updated: String },
    ],
});

module.exports = mongoose.model("Flight", flightSchema);
