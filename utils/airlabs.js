require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");

let count = 0;

class AirLabs {
    constructor() {}
    async getFlightData() {
        for (let index = 0; index < 1000000000; index++) {
            const a = 1;
            if (index == 1000000000 - 1) {
                console.log("done " + count);
            }
        }
        console.log("invoked airlabs.js/getFlifgthData " + count++);
    }
    async dataCollector() {
        var dataFlight = await setInterval(this.getFlightData, 1000);
    }
}

module.exports = AirLabs;
