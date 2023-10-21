const fs = require("fs")
const officegen = require("officegen")
const path = require("path")

// Create an empty Word object:
const docx = officegen("docx")

const createContent = (firstName, lastName, date) => {
    // Set document metadata
    docx.setDescription("personalized birthday-card");
    //date stamp
    const dateStamp = docx.createP()

    dateStamp.addText(`${date}`);
    dateStamp.options.align= "right";

    //create a paragraph and add text
    const headObj = docx.createP()
    
    headObj.addText(`To the dearest ${firstName} ${lastName}:`, { bold: true, font_face: 'Agency FB', font_size: 20, color: "#4e4eff"})

    headObj.addLineBreak()
    headObj.addLineBreak()
    headObj.addLineBreak()

    headObj.addText("HAPPY BIRTHDAY!!", { bold: true, font_face: 'Agency FB', font_size: 45, color: "#3131cb", // Set font color to blue
    highlight: "FFFF00", })

    headObj.options.align = "center"
}

const createBody = (firstName) => {
    const bodyObj = docx.createP()
    bodyObj.addText(`"Happy Birthday ${firstName}! May this special day bring you joy, laughter, and wonderful memories. You deserve all the happiness in the world. Wishing you a fantastic year ahead filled with Blessings, success, and fulfillment. May you live a happy and healthy life! 🎉🎂"`, {color: "#4e4eff"})
}

docx.on("finalize", () => {
    console.log("Word doc, succesfully created");
})


docx.on("error", (err) => {
    console.error(`This error ${err} has occured`);
})

const createDoc = (firstName, lastName, date) => {
    const outputFolder = "./createdDocuments"
    const createdFile = `happyB-day${firstName}.docx`

    const outputPath = path.join(outputFolder, createdFile)
    const outputStream = fs.createWriteStream(outputPath)

    createContent(firstName, lastName, date)
    createBody(firstName)
    docx.generate(outputStream)
}


//createDoc("chaim", "shtinkovitz", "23/23/23")
module.exports = createDoc

