#!/usr/bin/env node

const card = require("../cron")

const caps = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const first = process.argv[2]
const last = process.argv[3]
const email = process.argv[4]
const color = process.argv[5]
const min = process.argv[6]
const hour = process.argv[7]
const date = process.argv[8]
const month = process.argv[9]

const firstName = caps(first)
const lastName = caps(last)

// color = "colorful" or "dog", "gold", "black", "pink"
card(firstName, lastName, email, color, min, hour, date = "*", month = "*")

sendMultible = (userArray) => {
    userArray.forEach(user => {
        console.log(user);
    });
}
