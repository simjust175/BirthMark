#!/usr/bin/env node

const card = require("../cron")

const caps = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const first = process.argv[2]
const last = process.argv[3]
const email = process.argv[4]
const color = process.argv[5]
const min = process.argv[6]
const hour = process.argv[7]
let date = process.argv[8]
let month = process.argv[9]
//const[ , , first, last, email, color, min, hour, date, month] = process.argv

const firstName = caps(first)
const lastName = caps(last)

// color = "colorful" or "dog", "gold", "black", "pink"
card(firstName, lastName, email, color, min, hour, date = "*", month = "*")

sendMultible = (userArray) => {
    userArray.forEach(user => {
        console.log(user);
    });
}

// write in the terminal: mark then the first-name, last-name, email-address ,
//color("gold", "dog", "colorful", "pink", or "black"), min(frpm 1-9 you just write the number 
//for example for 09 write 9), hour(same as minute), date, month are OPTIONAL

// כתוב בטרמינל: שם הפרטי, שם המשפחה, כתובת האימייל
// צבע ("gold", "dog", "colorful", "pink" או "black")
// ( רק תכתוב את המספר - לדוגמה, ל- תכתוב ), שעה (כמו אצל הדקה)ם,
// תאריך, וחודש - הם אופציונליים
// בסדר הזה"mark >> שעה << דקה << צבע << כתובת-אימייל << שם-משפחה << שם-פרטי
