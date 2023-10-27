const nodeoutlook = require("nodejs-nodemailer-outlook")
const path = require("path")
require("dotenv").config()

const logoPath = path.join(__dirname, "./assets/logo/BirthMark.gif");
const html = `
<h1> Happy Birthday!! </h1>
<p> Sent using BirthMark</p>
<img src="${logoPath} alt="BIRTHMARK">`;

const sendMail = (email, firstName) => {
    nodeoutlook.sendEmail({
        auth: {
            user: process.env.OUTLOOK_ADDR,
            pass: process.env.OUTLOOK_PASS
        },
        from: process.env.OUTLOOK_ADDR,
        to: `${email}`,
        subject: `Happy Birthday!! ${firstName}`,
        html: html,
        text: 'Happy Birthday!',
        attachments:[{
            filename: `happyB-day${firstName}.docx`,
            path: `./createdDocuments/happyB-day${firstName}.docx`
        }],
        onError: (err) => console.log(err),
        onSuccess: (message) => console.log(`Message successfuly sent: ${JSON.stringify(message.envelope)}`)
    }
    
    );
}

module.exports = sendMail

