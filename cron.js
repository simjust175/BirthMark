const cron = require("node-cron");

const card = require("./createCard");
const mailTo = require("./mailTo")

const date = "23/23/23"
const cardSchedule = (firstName, lastName, email, color, min, hour) => {
    try {
        cron.schedule(`${min} ${hour} * * *`, () => {
            card(firstName, lastName, color)
            console.log(`i was called on: ${hour}:${min - 1}`);
        })
        min++
        cron.schedule(`${min} ${hour} * * *`, () => {
            mailTo(email, firstName)
        })
    } catch (err) {
        console.error(err);
    }
}

cardSchedule("Rivi", "Justman", ["bunim175@gmail.com", "judyjustman@gmail.com"], "dog", 13, 11)
// cardSchedule("Yossi", "Justman", "judyjustman@gmail.com", "black", 8, 10)
// cardSchedule("Pini", "Justman", "bunim175@gmail.com", "gold", 10, 10)

module.exports = cardSchedule