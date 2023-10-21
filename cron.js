const cron = require("node-cron");
const card = require("./createDoc");
const mailTo = require("./mailTo")

const date = "23/23/23"
const cardSchedule = (firstName, lastName, email, min, hour) =>{
    cron.schedule(`${min} ${hour} * * *`, ()=>{
        card(firstName, lastName, hour)
        console.log(`i was called on: ${hour}:${min-1}`);
    })
    cron.schedule(`${min} ${hour} * * *`, ()=>{
        mailTo(email, firstName)
    })
}

module.exports = cardSchedule