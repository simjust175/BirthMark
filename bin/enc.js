#!/usr/bin/env node

const card = require("../cron")

const caps = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const first = process.argv[2]
const last = process.argv[3]
const email = process.argv[4]
const min = process.argv[5]
const hour = process.argv[6]
const date = new Date()

const firstName = caps(first)
const lastName = caps(last)

card(firstName, lastName, email, min, hour)

sendMultible = (userArray) => {
    userArray.forEach(user => {
        console.log(user);
    });
}
