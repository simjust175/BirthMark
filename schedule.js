const schedule = require("node-schedule")


const day = new Date(2023, 9, 20, 1, 40, 30);

schedule.scheduleJob(day, () => {
    try {
        console.log(`now is: ${day}`);
    } catch (err) {
        console.error(`this error occured ${err}`);
    }

})