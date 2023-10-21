const nodemailer = require("nodemailer")
require("dotenv").config()

const html = `
<h1> Hello Worl</h1>
<p> is nodemailer working alright?</p>`

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.email',
    port: 587,
    auth: {
        user: process.env.USER_MAIL,
        pass: process.env.USER_PASS
    }
});

const main = async() => {
    const info = await transporter.sendMail({
        from: " 'Git Yuhr', <git.yuhr@gmail.com>",
        to: "bunim175@gmail.com",
        subject: "Nodemailer tryout",
        html: html 
    })

    console.log(`Message succesfuly sent: ${info.messageId}`);
}


main().catch(err => `Error Id: ${err}`);