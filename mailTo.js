const nodeoutlook = require("nodejs-nodemailer-outlook")
require("dotenv").config()

const html = `
<h1> Happy Birthday!! </h1>
<p> is nodemailer working alright?</p>`

const sendMail = (email, firstName) => {
    nodeoutlook.sendEmail({
        auth: {
            user: "happybirthmark@outlook.com",
            pass: process.env.OUTLOOK_PASS
        },
        from: 'happybirthmark@outlook.com',
        to: `${email}`,
        subject: `Happy Birthday!! ${firstName}`,
        html: html,
        text: 'This is text version!',
        attachments:[{
            filename: `happyB-day${firstName}.docx`,
            path: `./createdDocuments/happyB-day${firstName}.docx`
        }],
        onError: (err) => console.log(err),
        onSuccess: (message) => console.log(message)
    }
    
    );
}

module.exports = sendMail
