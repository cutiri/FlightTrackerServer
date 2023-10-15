const express = require("express");
const Router = express.Router();
const mongoose = require("mongoose");
const Flight = require("../models/Flight");

Router.get("/api/test/", async (req, res) => {
    let flight = new Flight();

    flight.hex = "1123123";
    flight.positionHistory.push({
        lat: 10,
        lng: 10,
        alt: 10,
        dir: 10,
        updated: 10,
    });
    flight.positionHistory.push({
        lat: 11,
        lng: 11,
        alt: 11,
        dir: 11,
        updated: 11,
    });
    flight.positionHistory.push({
        lat: 12,
        lng: 12,
        alt: 12,
        dir: 12,
        updated: 12,
    });
    flight.positionHistory.push({
        lat: 13,
        lng: 13,
        alt: 13,
        dir: 13,
        updated: 13,
    });
    flight.positionHistory.push({
        lat: 14,
        lng: 14,
        alt: 14,
        dir: 14,
        updated: 14,
    });
    flight.positionHistory.push({
        lat: 15,
        lng: 15,
        alt: 15,
        dir: 15,
        updated: 15,
    });

    await flight.save();

    return res.send("OK");
});

module.exports = { Router };
