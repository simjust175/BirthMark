const cron = require("node-cron");

const card = require("./createCard");
const mailTo = require("./mailTo")


const cardSchedule = (firstName, lastName, email, color, min, hour, date, month) => {
    try {
        console.log(`Doc for ${firstName} will be created ${hour}:${min}`);

        cron.schedule(`${min} ${hour} ${date} ${month} *`, () => {
            card(firstName, lastName, color)
            console.log(`Doc created on: ${hour}:${min}\nEmail to ${email} will be sent shortly`);
            mailTo(email, firstName)
        })
    } catch (err) {
        console.error(err);
    }
}


module.exports = cardSchedule