const express = require("express");
const Router = express.Router();
const axios = require("axios");
const mongoose = require("mongoose");

const { flights_snapshot } = require("../db/flights");

const MAX_AIRPLANES = 1000;

Router.get("/api", (req, res) => {
    console.log(1);
    res.send("Hello");
});

Router.get("/api/flights/", (req, res) => {
    const result = flights_snapshot.map(function (flight) {
        return {
            hex: flight.hex,
            lat: flight.lat,
            lng: flight.lng,
            dir: flight.dir,
            flight_icao: flight.flight_icao,
        };
    });
    res.send(result);
});

Router.get("/api/flight/:hex", (req, res) => {
    const hex = req.params.hex;
    const result = flights_snapshot.find((flight) => {
        return flight.hex === hex;
    });
    res.send(result);
});

function randomFromList(list) {
    const random = Math.floor(Math.random() * list.length);
    return list[random];
}

function getSecondFromListIfAny(list) {
    return list.length > 1 ? list[1] : list[0];
}

module.exports = { Router };
